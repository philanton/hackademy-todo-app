package handlers

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/openware/rango/pkg/auth"
	svc "github.com/philanton/hackademy-todo-app/be/services"
)

const (
	privkeyPath = "./keys/privkey.rsa"
	pubkeyPath  = "./keys/pubkey.rsa"
)

func TodoServiceMiddleware() gin.HandlerFunc {
	todoService := svc.NewTodoService()

	return func(c *gin.Context) {
		c.Set("todo", todoService)
		c.Next()
	}
}

func AuthMiddleware() gin.HandlerFunc {
	keys, err := auth.LoadOrGenerateKeys(privkeyPath, pubkeyPath)
	if err != nil {
		panic(err)
	}

	return func(c *gin.Context) {
		authHeader := strings.Split(c.GetHeader("Authorization"), "Bearer ")
		if len(authHeader) != 2 {
			c.Abort()
			c.JSON(http.StatusBadRequest, gin.H{"error": "No JWT passed"})
			return
		}

		token := authHeader[1]
		authData, err := auth.ParseAndValidate(token, keys.PublicKey)
		if err != nil {
			c.Abort()
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			return
		}

		c.Set("auth", &auth)
		c.Next()
	}
}

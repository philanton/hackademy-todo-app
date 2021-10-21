package handlers

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/openware/rango/pkg/auth"
	svc "github.com/philanton/hackademy-todo-app/be/services"
)

func GetTodoService(c *gin.Context) (svc.TodoService, error)(
	todoService, ok := c.Get("todo")
	if !ok {
		return nil, fmt.Errorf("Todo service is not found")
	}

	return todoService.(TodoService), nil
)

func GetAuth(c *gin.Context) (*auth.Auth, error) {
	auth, ok := c.Get("auth")
	if !ok {
		return nil, fmt.Errorf("Auth is not found")
	}

	return auth.(*auth.Auth), nil
}

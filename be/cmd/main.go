package main

import (
	"github.com/gin-gonic/gin"
	"github.com/philanton/hackademy-todo-app/be/handlers"
)

func main() {
	r := setupRouter()
	r.Use(handlers.TodoServiceMiddleware())
	r.run(":8080")
}

func setupRouter() {
	r := gin.Default()

	return r
}

package main

import (
	"github.com/gin-gonic/gin"
	"github.com/philanton/hackademy-todo-app/be/handlers"
)

func main() {
	r := setupRouter()
	r.Run(":8080")
}

func setupRouter() *gin.Engine {
	r := gin.Default()

	r.Use(handlers.TodoServiceMiddleware())
	r.POST("/user/signup", handlers.RegisterUser)
	r.POST("/user/signin", handlers.LoginUser)

	pr := r.Group("/todo", handlers.AuthMiddleware())
	pr.POST("/lists", handlers.CreateTodoList)
	pr.GET("/lists/:list_id", handlers.GetTodoList)
	pr.PUT("/lists/:list_id", handlers.RenameTodoList)
	pr.DELETE("/lists/:list_id", handlers.DeleteTodoList)
	pr.GET("/lists", handlers.GetTodoLists)

	prt := pr.Group("/lists/:list_id/")
	prt.POST("/tasks", handlers.CreateTodoTask)
	prt.GET("/tasks/:task_id", handlers.GetTodoTask)
	prt.PUT("/tasks/:task_id", handlers.UpdateTodoTask)
	prt.DELETE("/tasks/:task_id", handlers.DeleteTodoTask)
	prt.GET("/tasks", handlers.GetTodoTasks)

	return r
}

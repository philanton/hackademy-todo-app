package handlers

import (
	"fmt"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/openware/rango/pkg/auth"
	svc "github.com/philanton/hackademy-todo-app/be/services"
)

func GetTodoService(c *gin.Context) (svc.TodoService, error) {
	todoService, ok := c.Get("todo")
	if !ok {
		return nil, fmt.Errorf("todo service is not found")
	}

	return todoService.(svc.TodoService), nil
}

func GetAuth(c *gin.Context) (*auth.Auth, error) {
	authData, ok := c.Get("auth")
	if !ok {
		return nil, fmt.Errorf("auth is not found")
	}

	return authData.(*auth.Auth), nil
}

func GetUserService(c *gin.Context) (*svc.User, error) {
	todoService, err := GetTodoService(c)
	if err != nil {
		return nil, err
	}

	authData, err := GetAuth(c)
	if err != nil {
		return nil, err
	}

	user, err := todoService.GetUser(authData.Email)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func GetListService(c *gin.Context) (*svc.TodoList, error) {
	user, err := GetUserService(c)
	if err != nil {
		return nil, err
	}

	listId, err := strconv.Atoi(c.Params.ByName("list_id"))
	if err != nil {
		return nil, fmt.Errorf("not a number")
	}

	list, err := user.GetList(listId)
	if err != nil {
		return nil, err
	}

	return list, nil
}

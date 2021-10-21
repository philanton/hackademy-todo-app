package services

import (
	"crypto/md5"
	"fmt"
)

type TodoService interface {
	AddUser(string, string) error
	GetUser(string) (*User, error)
}

func NewTodoService() TodoService {
	return &UserStorage{
		users: make(map[string]*User),
	}
}

func (us *UserStorage) AddUser(email string, password string) error {
	if _, ok := us.users[email]; ok {
		return fmt.Errorf("user with email %s already exists", email)
	}

	us.users[email] = &User{
		Email:          email,
		PasswordDigest: string(md5.New().Sum([]byte(password))),
		listCount:      0,
		lists:          make(map[int]*TodoList),
	}

	return nil
}

func (us *UserStorage) GetUser(email string) (*User, error) {
	u, ok := us.users[email]
	if !ok {
		return nil, fmt.Errorf("no user with email %s", email)
	}

	return u, nil
}

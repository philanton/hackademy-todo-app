package services

type UserStorage struct {
	users map[string]*User
}

type User struct {
	email          string
	passwordDigest string
	listCount      int
	lists          map[int]*TodoList
}

type TodoList struct {
	id        int
	name      string
	taskCount int
	tasks     map[int]*Task
}

type Task struct {
	id          int
	name        string
	description string
	status      bool
}

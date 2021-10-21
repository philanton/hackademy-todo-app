package services

import (
	"fmt"
)

func (l *TodoList) AddTask(name string, description string) {
	task := &Task{
		id:          l.taskCount,
		name:        name,
		description: description,
		status:      false,
	}
	l.taskCount++
	l.tasks[task.id] = task
}

func (l *TodoList) UpdateTask(id int, name string, description string) (*Task, error) {
	task, ok := l.tasks[id]
	if !ok {
		return nil, fmt.Errorf("no task with id %d", id)
	}

	task.name = name
	task.description = description
	return task, nil
}

func (l *TodoList) ChangeTaskStatus(id int, status bool) (*Task, error) {
	task, ok := l.tasks[id]
	if !ok {
		return nil, fmt.Errorf("no task with id %d", id)
	}

	task.status = status
	return task, nil
}

func (l *TodoList) GetTask(id int) (*Task, error) {
	task, ok := l.tasks[id]
	if !ok {
		return nil, fmt.Errorf("no task with id %d", id)
	}

	return task, nil
}

func (l *TodoList) DeleteTask(id int) error {
	if _, ok := l.tasks[id]; !ok {
		return fmt.Errorf("no task with id %d", id)
	}

	delete(l.tasks, id)
	return nil
}

package services

import (
	"fmt"
)

func (u *User) AddList(name string) *TodoList {
	list := &TodoList{
		Id:        u.listCount,
		Name:      name,
		taskCount: 0,
		tasks:     make(map[int]*Task),
	}
	u.listCount++
	u.lists[list.Id] = list

	return list
}

func (u *User) RenameList(id int, name string) (*TodoList, error) {
	list, ok := u.lists[id]
	if !ok {
		return nil, fmt.Errorf("no list with id %d", id)
	}

	list.Name = name
	return list, nil
}

func (u *User) GetList(id int) (*TodoList, error) {
	list, ok := u.lists[id]
	if !ok {
		return nil, fmt.Errorf("no user with id %d", id)
	}

	return list, nil
}

func (u *User) GetLists() []*TodoList {
	lists := make([]*TodoList, 0, len(u.lists))

	for _, v := range u.lists {
		lists = append(lists, v)
	}

	return lists
}

func (u *User) DeleteList(id int) error {
	if _, ok := u.lists[id]; !ok {
		return fmt.Errorf("no user with id %d", id)
	}

	delete(u.lists, id)
	return nil
}

import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = Todo[];
    let todo = new Todo();
    todo.texto = "teste";
    todo.titulo = "Primeiro item da todolist"
  }

}

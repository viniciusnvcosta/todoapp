import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todo';

@Component({
	selector: 'app-todo-input',
	templateUrl: './todo-input.component.html',
	styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
	todoInput: FormGroup;

	@Output()
	novoTodo: EventEmitter<Todo> new EventEmitter();

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.todoInput = this.formBuilder.group({
			'titulo': ['', Validators.required],
			'texto': ['', Validators.required],
		});
	}
	public cadastar(): void {
		Todo novo
		console.log('cadastar!!!');
	}
}


import { TodosService } from './../../services/todos/todos.service';
import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms/src/directives';

interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {
  public todoList: ITodo[];
  constructor(private todosService: TodosService) { }

  create(input: HTMLInputElement) {
    const newTodo = {
      userId: 4,
      title: input.value,
      completed: false
    };

    this.todosService.create(newTodo).subscribe((resource) => {
      this.todoList.unshift(resource);
      // clear the input
      input.value = '';
    });
  }

  update(todo: ITodo, index: number) {
    this.todosService.patch(todo.id, { completed: true }).subscribe((resource: ITodo) => {
      this.todoList[index] = resource;
    });

  }

  delete(index: number) {
    const id = this.todoList[index].id;
    this.todosService.delete(id).subscribe(() => {
      this.todoList.splice(index, 1);
    })

  }
  ngOnInit() {
    // get data
    this.todosService.getTodos().subscribe(data => { this.todoList = data; });
  }

}

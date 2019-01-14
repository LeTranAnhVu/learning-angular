import { AppError } from './../../validators/app-errors';
import { TodosService } from './../../services/todos/todos.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from 'src/app/validators/not-found-error';
import { BadRequestError } from 'src/app/validators/bad-request-error';


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


  // get
  getTodos() {
    // get data
    this.todosService.getAll()
      .subscribe(
        data => { this.todoList = data; },
        (error: AppError) => {
          if (error instanceof NotFoundError) {
            alert('Cannot loading ToDo list');
          } else {
            throw error;
          }
        });
  }



  // post
  create(input: HTMLInputElement) {
    const newTodo = {
      userId: 4,
      title: input.value,
      completed: false
    };

    (this.todoList as any).unshift(newTodo);

    // clear the input
    input.value = '';

    this.todosService.create(newTodo)
      .subscribe(
        resource => {
          newTodo['id'] = resource.id;
          console.log('test', this.todoList[0]);
        },
        (error: AppError) => {
          // remove the falsy item
          this.todoList.shift();

          if (error instanceof NotFoundError) {
            alert('This Todo cannot be saved');
          } else if (error instanceof BadRequestError) {
            alert('This Todo has already existed');
          } else {
            throw error;
          }
        });
  }


  // patch
  update(todo: ITodo, index: number) {
    const originstate = this.todoList[index].completed;
    this.todoList[index].completed = !originstate;
    this.todosService.patch(todo.id, { completed: true })
      .subscribe(
        (resource: ITodo) => {
          this.todoList[index] = resource;
        },
        (error: AppError) => {
          this.todoList[index].completed = originstate;
          if (error instanceof NotFoundError) {
            alert('This Todo does not exist');
          } else {
            throw error;
          }
        });
  }


  // delete
  delete(index: number) {
    const id = this.todoList[index].id;
    this.todosService.delete(299).subscribe(
      () => {
        this.todoList.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert('This Todo does not exist');
        } else {
          throw error;
        }
      });

  }
  ngOnInit() {
    this.getTodos();

  }

}

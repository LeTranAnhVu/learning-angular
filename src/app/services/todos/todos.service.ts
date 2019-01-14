
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiDataService } from '../api-data/api-data.service';


@Injectable({
  providedIn: 'root'
})
export class TodosService extends ApiDataService{
  constructor(http: HttpClient) {
    super(http);
    this.url = 'https://jsonplaceholder.typicode.com/todos';
  }
}

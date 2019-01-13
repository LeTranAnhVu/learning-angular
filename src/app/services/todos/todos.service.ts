import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  getTodos(): Observable<any> {
    return this.http.get(this.url);
  }
  create(newTodo): Observable<any> {
    return this.http.post(this.url, newTodo);
  }
  patch(id, updateObject): Observable<any> {
    return this.http.patch(this.url + '/' + id, updateObject);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id.toString());
  }

  constructor(private http: HttpClient) { }
}

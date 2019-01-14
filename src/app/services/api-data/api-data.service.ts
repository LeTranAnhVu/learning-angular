import { AppError } from './../../validators/app-errors';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotFoundError } from 'src/app/validators/not-found-error';
import { BadRequestError } from 'src/app/validators/bad-request-error';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  protected url;
  getAll(): Observable<any> {
    return this.http.get(this.url)
      .pipe(
        catchError(
          (error: Response) => {
            return this.errorHandle(error);
          }
        )
      );
  }
  create(newTodo): Observable<any> {
    return this.http.post(this.url, newTodo)
      .pipe(
        catchError(
          (error: Response) => {
            return this.errorHandle(error);
          }
        )
      );
  }
  patch(id, updateObject): Observable<any> {
    return this.http.patch(this.url + '/' + id, updateObject)
      .pipe(
        catchError(
          (error: Response) => {
            return this.errorHandle(error);
          }
        )
      );
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id.toString())
      .pipe(
        catchError(
          (error: Response) => {
            return this.errorHandle(error);
          }
        )
      );
  }

  private errorHandle(error: Response): Observable<never> {
    if (error.status === 400) {
      return throwError(new BadRequestError(error));
    } else if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else {
      return throwError(new AppError(error));
    }
  }

  constructor(private http: HttpClient) { }
}

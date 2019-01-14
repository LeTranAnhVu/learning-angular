import { ErrorHandler } from '@angular/core';

export class AppErrorHandlers implements ErrorHandler {
  handleError(error: any) {
    alert('An unexpected error occurred!!!!!!!');
    console.log('custom error handler');
    console.log(error);
    console.log('end log error');
  }
}

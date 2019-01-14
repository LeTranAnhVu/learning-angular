import { AppError } from './app-errors';
export class BadRequestError extends AppError {
  constructor(error: any) {
    super(error);
  }
}

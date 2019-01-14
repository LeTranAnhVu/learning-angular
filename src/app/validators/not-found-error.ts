import { AppError } from './app-errors';
export class NotFoundError extends AppError {
  constructor(error: any) {
    super(error);
  }
}

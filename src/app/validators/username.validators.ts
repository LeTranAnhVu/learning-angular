import { AbstractControl, ValidationErrors } from '@angular/forms';


const users = [
  'vule',
  'trangpham',
  'hoainguyen'
]

export class UsernameValidator {
  static canNotHaveSpace(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value as string;
    if (value.indexOf(' ') >= 0) {
      return { haveSpace: true }
    }
    return null;
  }

  static userExist(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolved, rejected) => {
      setTimeout(() => {
        const username = control.value;
        let state: any = null;
        for (let i = 0; i < users.length; i++) {
          if (username === users[i]) {
            state = { existedUser: true };
            break;
          }
        }
        resolved(state);
      }, 2000);
    })
  }
}

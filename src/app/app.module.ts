import { AppErrorHandlers } from './validators/app-error-handlers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { TodosComponent } from './components/todos/todos.component';
import { StopPropagationDirective } from './directives/stop-propagation/stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TodosComponent,
    StopPropagationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandlers},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

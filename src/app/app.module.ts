import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { InputFormatDirective } from './directives/input-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    InputFormatDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

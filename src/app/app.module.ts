import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { InputFormatDirective } from './directives/input-format.directive';
import { TdfFormComponent } from './components/tdf-form/tdf-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    InputFormatDirective,
    TdfFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

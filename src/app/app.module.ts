import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { Child2Component } from './components/child2/child2.component';
import { RouterModule, Route } from '@angular/router';

const routes: Route[] = [
  {
    path: 'child/:id',
    component: Child2Component
  },

  {
    path: 'child',
    component: ChildComponent
  }


]

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

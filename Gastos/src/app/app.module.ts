import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    RegisterComponent,
    ExpenseListComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'expenses', component: ExpenseListComponent },
      { path: 'addExpense', component: AddExpenseComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

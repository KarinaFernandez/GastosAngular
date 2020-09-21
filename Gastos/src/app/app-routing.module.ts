import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'expenses', component: ExpenseListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const RoutingComponents = [LoginComponent, RegisterComponent]
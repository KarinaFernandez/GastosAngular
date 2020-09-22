import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {
  expenses = [];
  expenseTypes = [];

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getExpenses() {
    const headers = { 'Content-Type': 'application/json', 'apiKey': this.userService.getUser().apiKey };
    const params = new HttpParams().append('id', this.userService.getUser().id);
    return this.http.get("http://xpense.develotion.com/gastos.php", { headers, params });
  }

  getExpenseTypes() {
    const headers = { 'Content-Type': 'application/json', 'apiKey': this.userService.getUser().apiKey };
    return this.http.get("http://xpense.develotion.com/rubros.php", { headers });
  }

  addExpense(nombre, monto, idUsuario, idRubro) {
    const headers = { 'Content-Type': 'application/json', 'apiKey': this.userService.getUser().apiKey  };
    const body = JSON.stringify({ nombre, monto, idUsuario, idRubro});
    return this.http.post("http://xpense.develotion.com/gastos.php", body,{ headers });
  }

}

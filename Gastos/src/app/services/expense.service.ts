import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {
  expenses = [];

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getExpenses() {
    const headers = { 'Content-Type': 'application/json', 'apiKey': "this.userService.getUser().apiKey" };
    return this.http.get("https://xpense.develotion.com/rubros.php", { headers });
  }

  getExpenseTypes() {
    const headers = { 'Content-Type': 'application/json', 'apiKey': this.userService.getUser().apiKey };
    return this.http.get("http://xpense.develotion.com/rubros.php", { headers });
  }
}

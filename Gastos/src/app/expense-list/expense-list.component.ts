import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseServiceService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  gastos;

  constructor(
    private expenseService: ExpenseServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getExpenses();
  }
  
  getExpenses() {
    this.expenseService.getExpenses().subscribe(a => {
       this.gastos = a.gastos;
      console.log(this.gastos);
    })
  }

  addExpense() {
    this.router.navigate(['/addExpense']);
  }
}

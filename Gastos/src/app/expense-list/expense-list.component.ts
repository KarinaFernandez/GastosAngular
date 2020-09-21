import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses;

  constructor(
    private expenseService: ExpenseServiceService,
  ) { }

  ngOnInit() {
    // this.expenses = this.expenseService.getExpenses();
    // console.log(this.expenses);
    this.getExpenses();
  }

  
  getExpenses() {
    this.expenseService.getExpenses().subscribe(a => {
      // this.expenses = a.expenses;
      console.log(this.expenses);
    })
  }
}

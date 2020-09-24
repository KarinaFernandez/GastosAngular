import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../services/expense.service';

@Component({
  selector: 'app-total-amount-wasted',
  templateUrl: './total-amount-wasted.component.html',
  styleUrls: ['./total-amount-wasted.component.css']
})

export class TotalAmountWastedComponent implements OnInit {
  todosGastos;
  totalGastado = 0;

  constructor(private expenseService: ExpenseServiceService) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    /* TODO: Change this service's call by value in service because it's not
    updated after a changed in main view (ex: remove element) */
    this.expenseService.getExpenses().subscribe((a: any) => {
      this.todosGastos = a.gastos;
      this.getTotalAmount();
    })
  }

  getTotalAmount() {
    this.totalGastado = this.todosGastos.reduce((n, {monto}) => n + parseInt(monto), 0) 
  }
}

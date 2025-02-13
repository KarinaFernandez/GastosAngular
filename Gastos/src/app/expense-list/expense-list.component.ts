import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseServiceService } from '../services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  todosGastos;
  gastos = [];
  titulos = [];
  total;
  errMsg;

  constructor(
    private expenseService: ExpenseServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    this.expenseService.getExpenses().subscribe((a: any) => {
      this.expenseService.setExpenses(a.gastos);
      
      this.todosGastos = a.gastos;
      this.gastos = this.todosGastos.slice(0, 10);

      this.getLastExpensesAmount();
    })
  }

  getLastExpensesAmount() {
    let suma = 0;
    this.gastos.forEach(gasto => {
      let monto = parseInt(gasto.monto, 10);
      suma += monto;
    });
    this.total = suma;

    if (this.gastos.length > 0) {
      this.titulos = ["Nombre", "Monto", ""];
    }
  }

  addExpense() {
    this.router.navigate(['/addExpense']);
  }

  removeExpense(index) {
    let idGasto = this.todosGastos[index].id

    this.expenseService.removeExpense(idGasto).subscribe((a: any) => {
      if (a.codigo == 200) {
        this.getExpenses();
      } else {
        this.errMsg = a.mensaje;
      }
    })
  }
}

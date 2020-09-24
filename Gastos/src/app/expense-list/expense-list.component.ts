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
  total = 1;
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
      this.todosGastos = a.gastos;
      this.gastos = this.todosGastos.slice(0, 10);

      let suma = 0;
      this.gastos.forEach(gasto => {
        let monto = parseInt(gasto.monto, 10);
        suma += monto;
      });
      this.total = suma;

      // TODO: Fix this
      this.titulos = ["Nombre", "Monto", ""];
    })
  }

  addExpense() {
    this.router.navigate(['/addExpense']);
  }

  removeExpense(index) {
    console.log(index);

    let idGasto = this.todosGastos[index].id
    console.log(idGasto);

    this.expenseService.removeExpense(idGasto).subscribe((a: any) => {
      if (a.codigo == 200) {
        this.getExpenses();
      } else {
        this.errMsg = a.mensaje;
      }
    })
  }
}

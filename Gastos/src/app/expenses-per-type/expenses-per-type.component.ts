import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../services/expense.service';

@Component({
  selector: 'app-expenses-per-type',
  templateUrl: './expenses-per-type.component.html',
  styleUrls: ['./expenses-per-type.component.css']
})
export class ExpensesPerTypeComponent implements OnInit {
  todosGastos;
  rubros;
  errMsg;

  constructor(private expenseService: ExpenseServiceService) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    // TODO: Change this service's call by value in service
    this.expenseService.getExpenses().subscribe((a: any) => {
      this.todosGastos = a.gastos;
      this.getSumByExpenseType();
    })
  }

  getSumByExpenseType() {
    var result = this.todosGastos.reduce(function (acc, val) {
      var o = acc.filter(function (obj) {
        return obj.rubro == val.rubro;
      }).pop() || { rubro: val.rubro, monto: 0 };

      o.monto += parseInt(val.monto);
      acc.push(o);
      return acc;
    }, []);

    this.rubros = Array.from(new Set(result));
  }
}

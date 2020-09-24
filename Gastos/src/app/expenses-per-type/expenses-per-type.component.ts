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
    this.getExpenses()
  }

  getExpenses() {
    this.expenseService.getExpenses().subscribe((a: any) => {
      this.todosGastos = a.gastos;
      console.log(this.todosGastos);
      this.getSumByExpenseType();
    })
  }

  getExpensesByType() {
    var msgTotal = this.todosGastos.reduce(function (prev, cur) {
      return prev + parseInt(cur.monto);
    }, 0);
    console.log(msgTotal);
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
    console.log(result);

    this.rubros = Array.from(new Set(result));
    console.log(this.rubros);

  }
}

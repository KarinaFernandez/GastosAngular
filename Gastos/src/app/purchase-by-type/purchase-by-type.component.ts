import { Component, OnInit } from '@angular/core';
import { ExpenseServiceService } from '../services/expense.service';

@Component({
  selector: 'app-purchase-by-type',
  templateUrl: './purchase-by-type.component.html',
  styleUrls: ['./purchase-by-type.component.css']
})
export class PurchaseByTypeComponent implements OnInit {
  todosGastos;
  rubros = [];

  constructor(private expenseService: ExpenseServiceService) { }

  ngOnInit() {
    this.getExpenses();
  }

  getExpenses() {
    /* TODO: Change this service's call by value in service because it's not
    updated after a changed in main view (ex: remove element) */
    this.expenseService.getExpenses().subscribe((a: any) => {
      this.todosGastos = a.gastos;
      this.getCountByExpenseType();
    })
  }

  getCountByExpenseType() {
    var result = this.todosGastos.reduce(function (acc, val) {
      var o = acc.filter(function (obj) {
        return obj.rubro == val.rubro;
      }).pop() || val.rubro;

      acc.push(o);
      return acc;
    }, []);

    result.sort();
    var current = null;
    var count = 0;
    for (var i = 0; i < result.length; i++) {
      if (result[i] != current) {
        if (count > 0) {
          this.rubros.push({ rubro: current, cant: count });
        }
        current = result[i];
        count = 1;
      } else {
        count++;
      }
    }
    if (count > 0) {
      this.rubros.push({ rubro: current, cant: count });
    }
    console.log(this.rubros);
  }
}

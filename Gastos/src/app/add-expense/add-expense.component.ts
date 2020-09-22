import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpenseServiceService } from '../services/expense.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {
  rubros;
  addExpenseForm;
  errMsg;

  constructor(
    private expenseService: ExpenseServiceService,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService) {
      this.addExpenseForm = this.formBuilder.group({
        name: '',
        amount: '',
        expenseType: ''
      });
     }

  ngOnInit() {
    this.getExpenseTypes();
  }

  getExpenseTypes() {
    this.expenseService.getExpenseTypes().subscribe(a => {
      this.rubros = a.rubros;
      console.log(this.rubros);
    })
  }

  onSubmit(expenseData) {
    this.errMsg = undefined;
    this.addExpenseForm.reset();
    console.warn("Expense information", expenseData);

    const { name, amount, expenseType } = expenseData;

    if (name == "" || amount == "") {
      this.errMsg = "Por favor valide los datos ingresados"

    } else {

      // Call to service and if is okey redirect
      this.expenseService.addExpense(name, amount, this.userService.getUser().id, 3).subscribe(expense => {
        console.log(expense);
        this.router.navigate(['/expenses']);
      },
        err => {
          if (err.status === 409) {
            this.errMsg = 'Valide los datos ingresados';
          }
        });
    }
  }

}

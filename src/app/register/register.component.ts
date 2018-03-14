import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, NgForm, FormBuilder, Validators } from '@angular/forms';
import { StorageStore } from '../service/localstorage.service';
import { StorageData } from '../data/Storage.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
chatRegister: FormGroup;

  constructor(private formb: FormBuilder,
  private store: StorageStore,
  private router: Router
  ) {
    this.creatForm();
   }

 creatForm() {

  this.chatRegister = this.formb.group({
      Firstname : new FormControl('', Validators.required),
      Lastname : new FormControl('', Validators.required),
      Gender : new FormControl('', Validators.required),
      Username : new FormControl('', Validators.required),
      Password : new FormControl('', Validators.pattern('(?=.*[a-z])')),
      Retypepassword : new FormControl('', Validators.required),
       Age: new FormControl('', Validators.compose([
         Validators.required, this.ageValidator]
       ))

  });
 }

// creating my  custom  validator for checking that is a  number  for age
ageValidator(control: FormControl): {[s: string]: Boolean} {
  if (!control.value.match('/^\d+$/')) {
    return {notAge: true};
  }
}


ngOnInit()  {

}

 onSubmitRegister(groupform: FormGroup) {
   this.store.setStorage(groupform.value, groupform.value.Username);
   // tslint:disable-next-line:no-unused-expression
   this.router.navigate(['/login']);

   console.log(groupform.value);

 }



}

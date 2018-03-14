import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StorageStore } from '../service/localstorage.service';
import { StorageData } from '../data/Storage.interface';
import { UrlGards } from '../service/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createLogin: FormGroup;
  isLogin: Boolean = false;
  userlogininfo:StorageData;
  username: string;
  usernameNotfound: Boolean = false;
return :string ="";

  constructor(private formlogin: FormBuilder,
    private store: StorageStore,
    private router:Router,
    private route: UrlGards) {
      this.Login();
     }
   Login() {

      this.createLogin = this.formlogin.group({
        username : new FormControl('', Validators.required),
        password : new FormControl('', Validators.required)
     });
     }

  ngOnInit() {
 

  }


  onSubmitLogin(Logininfo:FormGroup) {
   
    
    this.userlogininfo = this.store.getStorage(Logininfo.value.username);
    if(this.userlogininfo === null){
      this.usernameNotfound = true;
      this.store.checkingUserNotlog(this.usernameNotfound);
      return ;

    }
  
    this.Loginchecking(Logininfo, this.userlogininfo);
    return ;
  }

Loginchecking(formlogin:FormGroup, dblogin:StorageData) :Boolean {

  if (formlogin.value.username === dblogin.Username &&
     formlogin.value.password === dblogin.Password ) {
       this.isLogin = true;
       this.usernameNotfound = false;
       this.store.setUsername(formlogin.value.username);
       // tslint:disable-next-line:no-unused-expression
       this.store.checkingUserNotlog(this.usernameNotfound);
       // tslint:disable-next-line:no-unused-expression
       this.router.navigate(['/user/' + formlogin.value.username]);

       return true;
      } else {
      this.usernameNotfound = true;
      this.store.checkingUserNotlog(this.usernameNotfound);
      return false;
   }

}



}

import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { StorageData } from '../data/Storage.interface';


@Injectable()

export  class StorageStore {
userData: string;
userLogin: string;
Userloginname:string;
UserloginCheck:Boolean;
parse : StorageData;

 constructor(protected storage: AsyncLocalStorage) {}

 setStorage(userinfo: StorageData, key:string) {
      this.userData = JSON.stringify(userinfo);
      localStorage.setItem(key, this.userData);
      console.log(this.userData);
 }

 getStorage(key: string) {
   this.userLogin  = localStorage.getItem(key);
 if(this.userLogin === '') {
   return null;
 }

   // tslint:disable-next-line:no-non-null-assertion
  this.parse = JSON.parse(this.userLogin);
 return this.parse;

 }
// making  a  global  stuff to  check  the user  is goin
checkingUserNotlog(checks: Boolean): Boolean {
        if (checks) {
          this.UserloginCheck = false;
        return true;
        } else {
          this.UserloginCheck = true;
          return false;
        }
}

getUsername() {
  return this.Userloginname;
}
setUsername(username: string) {
  this.Userloginname = username ;
  console.log(this.Userloginname);
}

getUsercheck() {
  return this.UserloginCheck;
}



}

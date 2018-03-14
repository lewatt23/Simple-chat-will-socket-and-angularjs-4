import { StorageData } from './../data/Storage.interface';
import { Injectable } from '@angular/core';
import { RouterEvent, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageStore } from './localstorage.service';



@Injectable()

export class UrlGards implements CanActivate{

    constructor( private router: Router,
    private Store: StorageStore) {

    }
canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ) {
 if (this.Store.getUsercheck()) {
    return true;
 } else{
      this.router.navigate(['/login'], {
       queryParams: {
           return: state.url
       }
     });
     return false;
 }
}

}

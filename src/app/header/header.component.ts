import { Component, OnInit } from '@angular/core';
import { StorageStore } from '../service/localstorage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 username: string;

  constructor(private store: StorageStore) { }

  ngOnInit() {

  }
checkifnotlogin(): Boolean {
  this.setUsername();
  return this.store.getUsercheck();
}

setUsername() {
  this.username = this.store.getUsername();
}

logout(){
  this.store.UserloginCheck = false;
}

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { SideComponent } from '../side/side.component';
import { ClientChat } from '../service/clientchat.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ChatInterface } from '../data/chat.interface';
import { DatePipe } from '@angular/common';
import { StorageStore } from '../service/localstorage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  createmessage: FormGroup;
  messages : ChatInterface[] =[{
     Author: 'stanly',
     Time: new Date(),
     Message: 'Hi start chating with me '
}];



  connection;
  user;
  Users = ['stanly'];
 Newuseremit;
 author:string;
  message: ChatInterface;

  constructor(private chatService:ClientChat,
    private formmessage: FormBuilder,
    private Store: StorageStore
  ) {
      this.Formmessage();


    }

 Formmessage(){

  this.createmessage = this.formmessage.group({
    messsages: new FormControl('')
 });

 }


  sendMessage(form: string) {
    // tslint:disable-next-line:no-unused-expression
    console.log(this.message);
    this.message = {
        Author: this.Store.getUsername(),
         Time: new Date(),
         Message: form
    };
   
 this.user = JSON.stringify(this.message);
    this.chatService.sendMessage(this.user);
   // this.createmessage.reset();
   console.log(this.message);


  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(messager => {
      this.author = messager.Author;
      this.messages.push(messager);
    });

    this.Newuseremit = this.chatService.getUser().subscribe(user => {
       if(this.Users.indexOf(this.Store.getUsername()) === -1 ){
          this.Users.push(this.Store.getUsername());
         
       }
    });
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}

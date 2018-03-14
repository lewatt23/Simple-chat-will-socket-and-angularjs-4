import { ChatInterface } from './../data/chat.interface';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ClientChat {
  private url = 'http://localhost:5000';
  private socket;
  constructor(
  ){
      this.socket = io(this.url);
  }

  sendMessage(message){
    this.socket.emit('add-message', message);
  }

  getMessages() {
    const observable = new Observable<ChatInterface>(observer => {
      this.socket.on('message', (data: ChatInterface) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
   }



   getUser() {
    const observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('newuser', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
   }




}

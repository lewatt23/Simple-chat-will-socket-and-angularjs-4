import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import * as Rx from 'rxjs/Rx';
import { webSocket } from 'rxjs/observable/dom/webSocket';


@Injectable()
export  class WebsocketsService {

  constructor() {}

  private subject: Rx.Subject<MessageEvent>;

  public connect(url): Rx.Subject<MessageEvent> {

    if(!this.subject) {
        this.subject = this.create(url);
        console.log('successfully  connected to :' + url);
      }
      return this.subject;
  }

   private create(url): Rx.Subject<MessageEvent > {
       const ws = new WebSocket(url);

       const observable = Rx.Observable.create(
        (obs: Rx.Observer<MessageEvent>) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        }
   );

    const observer = {
    next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(data));
        }
    },
};
return Rx.Subject.create(observer, observable);
   }




}

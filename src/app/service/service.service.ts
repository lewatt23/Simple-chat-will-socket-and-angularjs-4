import { Articles } from './../data/mockdata';
import { Map } from './../data/interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-spacing
import{of} from 'rxjs/observable/of';

@Injectable()
export class ServiceRateit {

    getRate(): Observable<Map[]> {
        return of(Articles);
    }

}

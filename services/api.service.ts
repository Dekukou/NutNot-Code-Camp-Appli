import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { ApiGlobal } from '../models/api-global.model';

@Injectable()
export class ApiService {

    private baseUrl: string = 'http://172.16.2.69:5000/';
    private chatUrl: string = 'talk/fr/12/';
    
    constructor(private http: Http) { }

    public getObjects(): any {
        //const url = `${this.baseUrl}${this.chatUrl}bonjour`;
        const url = "http://172.16.2.69:5000/talk/fr/12/bonjour";
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as ApiGlobal)
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}
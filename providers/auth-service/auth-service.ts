import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

let api_url = 'http://172.16.2.69:5000/';

@Injectable()
export class AuthServiceProvider {

    constructor(public http: HttpClient) {

    }

    postData(credentials, url_path) {
        let xml = new XMLHttpRequest();

        xml.open('GET', api_url + url_path, false);
        xml.send();
        return JSON.parse(xml.response);
    }
}
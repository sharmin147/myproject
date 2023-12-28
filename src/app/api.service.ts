import { Injectable } from '@angular/core';
import { Service } from './service';
import { Contact } from './contact';
import { About } from './about';
import { Home } from './home';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	PHP_API_SERVER = "http://localhost/angularcrud/api";
	constructor(private httpClient: HttpClient) {}
	readService(): Observable<Service[]>{
		return this.httpClient.get<Service[]>(`${this.PHP_API_SERVER}/service.php`);
	}
	 readContact(): Observable<Contact[]>{
	 	return this.httpClient.get<Contact[]>(`${this.PHP_API_SERVER}/contact.php`);
	  }
      readAbout(): Observable<About[]>{
        return this.httpClient.get<About[]>(`${this.PHP_API_SERVER}/about.php`);
     }
	 readHome(): Observable<Home[]>{
        return this.httpClient.get<Home[]>(`${this.PHP_API_SERVER}/home.php`);
     }
}
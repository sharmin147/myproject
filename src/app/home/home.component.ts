import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { About } from '../about';
import { Home } from '../home';
import { Service } from '../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public about?: About[];
  public home?: Home[];
  public service?: Service[];

	constructor(private apiService: ApiService) {
		this.apiService.readAbout().subscribe((about: About[])=>{
			this.about = about;
		})

    this.apiService.readHome().subscribe((home: Home[])=>{
			this.home = home;
		})
    this.apiService.readService().subscribe((service: Service[])=>{
			this.service = service;
		})
	}
}



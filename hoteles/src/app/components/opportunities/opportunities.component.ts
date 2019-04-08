import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UsersService } from '../../services/users.service'

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
	public profile
	public baseroute

  constructor(private activatedRoute:ActivatedRoute, private usersService:UsersService) {
  	this.baseroute = 'http://localhost:4004/api/v1/'
  	this.activatedRoute.params.subscribe(params => {
  		this.usersService.publicProfile(params.id).subscribe(data => {
  			
  			this.profile = data
        console.log(this.profile)
  		}, error => {
  			
  			console.log(error)
  		})
  	})
  }

  ngOnInit() {
  }

  getAge(date:string):number {
    let year = parseInt(date.substring(0, 4))
    let month = parseInt(date.substring(5, 7))
    let day = parseInt(date.substring(8, 10))
    let today = new Date()
    let age = today.getFullYear() - year
    if(today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
      age--
    }
    return age
  }

}

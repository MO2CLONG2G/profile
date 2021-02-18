import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  createProfileData: any = {}
  constructor(private profile: ProfileService) { }

  ngOnInit() {
  }
  createProfile(){
    this.profile.createProfile(this.createProfileData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }


}

import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../Services/auth/auth-service/auth.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})

export class UserInformationComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }
}

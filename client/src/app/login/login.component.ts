import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_name: string;
  submitDisabled: boolean = true;
  constructor(private userService: UserService, private router: Router) { }

  async submit() {
    try {
      await this.userService.login(this.user_name)
      this.router.navigate(['/dashboard'])
    } catch(e) {
      this.router.navigate(['/login'])
    }
  }

  input() {
    this.user_name = this.user_name.trim()
    this.submitDisabled = this.user_name === ''
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from './api/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {
  }

  async ngOnInit() {
    try {
      let user_id = await this.userService.current()
      if (user_id !== null) this.router.navigateByUrl('/dashboard')
      else this.router.navigateByUrl('/login')
    } catch(_)  {
      this.router.navigateByUrl('/login')
    }
  }

}

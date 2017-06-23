import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../api/user.service'
import { TopicService } from '../api/topic.service'
import { TopictableComponent } from '../topictable/topictable.component'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user_name: string
  user_id: string
  title: string
  description: string
  category: string
  constructor(
    private userService: UserService,
    private topicService: TopicService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.user_id = await this.userService.current()
    let user = null;
    if (this.user_id) {
      user = await this.userService.load(this.user_id)
    }
    if (user) {
      this.user_name = user.name
    }
  }

  async submit() {
    try {
      console.log(this.category)
      let topic = await this.topicService.create(this.title, this.description, this.user_id, this.category)
      window.location.reload()
    } catch(e) {
      console.log(e)
    }
  }

}

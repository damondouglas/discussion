import { Component, OnInit } from '@angular/core';
import { TopicService } from '../api/topic.service'
import { UserService } from '../api/user.service'

@Component({
  selector: 'app-topictable',
  templateUrl: './topictable.component.html',
  styleUrls: ['./topictable.component.css']
})
export class TopictableComponent implements OnInit {
  topics: Array<any>
  users = {}
  constructor(private topicService: TopicService, private userService: UserService) { }

  async ngOnInit() {
    this.topics = await this.topicService.list()
    let userData = await this.userService.list()
    for(let user of userData) {
      this.users[user._id] = user.name
    }
  }

}

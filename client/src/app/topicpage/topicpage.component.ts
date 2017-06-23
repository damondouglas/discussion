import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topicpage',
  templateUrl: './topicpage.component.html',
  styleUrls: ['./topicpage.component.css']
})
export class TopicpageComponent implements OnInit {
  topic_id: string
  private sub: any
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.topic_id = params['topic_id']
    }) 
  }

}

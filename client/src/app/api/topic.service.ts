import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class TopicService {

  constructor(private http: Http) { }

  create(title: string, description: string, user_id: string, category: string) {
    return this.http.post('/topic/create', {
      "title": title,
      "description": description,
      "user_id": user_id,
      "category": category
    })
    .map(data => data.json())
    .toPromise()
  }

  list() {
    return this.http.get('/topic/list')
    .map(data => data.json())
    .toPromise()
  }
}

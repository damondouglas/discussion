import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import 'rxjs'

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  current() {
    return this.http.get('/user/current')
    .map(data => data.json())
    .toPromise()
  }

  login(name: string) {
    return this.http.post('/user/login', {"name": name})
    .map(data => data.json())
    .toPromise()
  }

  load(id: string) {
    return this.http.get('/user?user_id=' + id)
    .map(data => data.json())
    .toPromise()
  }

  list() {
    return this.http.get('/user/list')
    .map(data => data.json())
    .toPromise()
  }
}

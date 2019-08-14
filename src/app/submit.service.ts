import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SubmitService {
  baseUrl: string = "https://reqres.in/api/users";
  constructor(private httpClient: HttpClient) { }

  public submitData(obj) {
    return this.httpClient.post(this.baseUrl, obj, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }
}

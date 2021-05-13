import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

export class TimeRequest {
  constructor(time:string, timezone:string) {
    this.time = time;
    this.timezone = timezone;
  }
  time: string;
  timezone: string;
}

@Injectable()
export class TimeTransformerService {
  private  httpOptions: any;
  env = environment;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      'responseType'  : 'arraybuffer' as 'json'
    };
  }

  public requestTransformTime(timeRequest:TimeRequest) {
    return this.http.post(this.env.apiUrl, timeRequest, this.httpOptions).toPromise();
  }

}

import { Component } from '@angular/core';
import {TimeRequest, TimeTransformerService} from "../providers/time-transformer-service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Please insert a time and timezone to transform it to UTC format.';
  formData:FormGroup;
  UTCtime: string;
  errorResponse: string;
  constructor(private timeTransformerService: TimeTransformerService) {
    this.UTCtime = '';
    this.errorResponse = '';
    this.formData = new FormGroup({
      time: new FormControl("12:12:12"),
      timezone: new FormControl("+4")
    });
  }

  onClickSubmit(timeRequest:TimeRequest) {
    console.log(timeRequest)
    this.timeTransformerService.requestTransformTime(timeRequest);
    throw this.timeTransformerService.requestTransformTime(timeRequest)
      .then((response:any) => {
        this.errorResponse = '';

        try {
          let dllink:any = document.getElementById('download');
          const myBlob = new Blob([response], {type : 'text/json'});
          dllink.href = window.URL.createObjectURL(myBlob);
          dllink.setAttribute("download","timeInUTCFormat.json");
          dllink.click();

        } catch (e) {
          console.log("EROR converting", e)
        }

      }).catch((error) => {
        console.log("Translate error response is:", error);
        this.errorResponse = "Please use the format HH:mm:ss for time and (+/-)HH:mm or H:m or H for the timezone.";
      })
  }

}

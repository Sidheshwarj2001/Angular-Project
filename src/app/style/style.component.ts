import { Component } from '@angular/core';
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent {
  public mycolor :string =  "green";

  public isSet : boolean = true;

  public myClass = "failure"; 
  public Data = " ";
  public MyEvent() 
  {
    this.Data = "Click Button........";
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding';

  public Display() : string
  {
    return "Welcome to our Style Binding";
  }

}

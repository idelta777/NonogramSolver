import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Nonogram Solver';

  verifyAmount(e : Event) : void {


    if(parseInt((<HTMLInputElement>e.target).value) < 1 ) {
      alert("El valor debe ser mayor a 1");
    }
  }
}

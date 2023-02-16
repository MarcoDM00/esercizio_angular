import { Component } from '@angular/core';
import { Nano } from './Nano';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nani:Nano[] = [
    new Nano("Cucciolo", 1),
    new Nano("Mammolo", 2),
    new Nano("Dotto", 3),
    new Nano("Brontolo", 4),
    new Nano("Pisolo", 5),
    new Nano("Eolo", 6),
    new Nano("Gongolo", 7)
  ];

  stringInterpolation:string = "kcnvnjdnjsndjdnfdfjdfdndnfdsfdfsdfnwefn";
  propertyBinding:string = "corsivo";
  twoWayBinding:string = "";
}

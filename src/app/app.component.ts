import { Component,  } from '@angular/core';
import * as shpwrite from 'shp-write';
import * as json from '../assets/sample.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  inputText = '';
  fileName = 'Sample';

  createShapeFile() {
    var options = {
      folder: this.fileName,
      types: {
          point: this.fileName,
          polygon: this.fileName,
          line: this.fileName,
      }
    }
    const jsonString = JSON.parse(this.inputText);
    shpwrite.download(jsonString, options);
  }


  ngOnInit() {
      this.inputText = JSON.stringify(json, undefined, 4);
  }
}

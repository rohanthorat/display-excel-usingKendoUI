import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    public head;
    public tableData = [];

    public changeListener(files: FileList){
      console.log(files);
      if(files && files.length > 0) {
        let file : File = files.item(0);
        let reader: FileReader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
          let csv: string = reader.result;
          let allTextLines = csv.toString().split(/\r?\n|\r/);
          let headers = allTextLines[0].split(',');
          let lines = [];

          for ( let i = 0; i < allTextLines.length; i++) {
            // split content based on comma
            let data = allTextLines[i].split(',');
             let tarr = [];
              for ( let j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
              }
              lines.push(tarr);
          }
          this.head = headers;
          for (let k = 1; k < lines.length; k++) {
            this.tableData.push(lines[k]);
          }
        }
      }
    }
}

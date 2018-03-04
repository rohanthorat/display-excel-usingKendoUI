import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    public changeListener(files: FileList){
      console.log(files);
      if(files && files.length > 0) {
        let file : File = files.item(0);
        console.log(file.name);
        console.log(file.size);
        console.log(file.type);
        let reader: FileReader = new FileReader();
        reader.readAsText(file);
        reader.onload = (e) => {
          let csv: string = reader.result;
          console.log(csv);
        }
      }
    }
}

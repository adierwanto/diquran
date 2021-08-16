import { Component } from '@angular/core';
import { SurahService } from './services/surah.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';

  data:any = []

  constructor(private surah: SurahService) {
    this.surah.getData().subscribe(data=>{
      this.data=data
    })
  }
}

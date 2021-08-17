import { Component, OnInit } from '@angular/core';
import { SurahService } from 'src/app/services/surah.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any = []

  constructor(private surah: SurahService) {
    this.surah.getData().subscribe(data=>{
      this.data=data
    })
  }

  ngOnInit(): void {
  }

}

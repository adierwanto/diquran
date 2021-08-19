import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurahService } from 'src/app/services/surah.service';

@Component({
  selector: 'app-detail-surah',
  templateUrl: './detail-surah.component.html',
  styleUrls: ['./detail-surah.component.scss']
})
export class DetailSurahComponent implements OnInit {

  id = '';
  data:any = []

  constructor(private route: ActivatedRoute,private SurahService: SurahService) {
    const id = this.route.snapshot.params.id; 
    this.SurahService.getDetail(id).subscribe(data=> {
      this.data = data
      console.log(data,'data');
    })
  }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

}

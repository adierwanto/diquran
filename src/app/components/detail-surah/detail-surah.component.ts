import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-surah',
  templateUrl: './detail-surah.component.html',
  styleUrls: ['./detail-surah.component.scss']
})
export class DetailSurahComponent implements OnInit {

  id = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

}

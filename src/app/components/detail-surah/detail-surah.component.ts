import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurahService } from 'src/app/services/surah.service';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-detail-surah',
  templateUrl: './detail-surah.component.html',
  styleUrls: ['./detail-surah.component.scss']
})
export class DetailSurahComponent implements OnInit {

  id = '';
  data:any = []
  modalRef?: MdbModalRef<ModalComponent>;

  constructor(private route: ActivatedRoute,private SurahService: SurahService, private modalService: MdbModalService) {

    const id = this.route.snapshot.params.id; 
    this.SurahService.getDetail(id).subscribe(data=> {
      this.data = data
    })
  }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  openModal(id: any) {
    this.modalRef = this.modalService.open(ModalComponent, {data: {body: id}, modalClass: 'modal-dialog-centered modal-xl'});
  }

}

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
    this.modalRef = this.modalService.open(ModalComponent, {data: {body: id}, modalClass: 'modal-dialog-centered modal-xl modal-dialog-scrollable'});
  }


  playAudio(myAudio: any, faPlay: any, faPause: any, btnPlay: any) {
        const theAudio   = <HTMLMediaElement>document.getElementById(myAudio)!
        const btn       = document.getElementById(btnPlay)!
        const playIcon  = document.getElementById(faPlay)!
        const pauseIcon = document.getElementById(faPause)!
        const dataPlay  = btn.getAttribute('playing')

        if(dataPlay === 'false')
        {
            btn.setAttribute('playing', 'true')
            const playingAudio = theAudio.play()

            if(playingAudio !== undefined)
            {
                playingAudio.then(() =>
                {
                    playIcon.style.display = 'none'
                    pauseIcon.style.display = 'inline-block'
                }).catch((error) => 
                {
                    console.log(error)
                })
            }
        }
        else
        {
            btn.setAttribute('playing', 'false')
            theAudio.pause()
            playIcon.style.display = 'inline-block'
            pauseIcon.style.display = 'none'
        }

        theAudio.onpause = () =>
        {
            btn.setAttribute('playing', 'false')
            theAudio.pause()
            playIcon.style.display = 'inline-block'
            pauseIcon.style.display = 'none'
        }
  }

}

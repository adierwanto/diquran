import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSurahComponent } from './detail-surah.component';

describe('DetailSurahComponent', () => {
  let component: DetailSurahComponent;
  let fixture: ComponentFixture<DetailSurahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSurahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

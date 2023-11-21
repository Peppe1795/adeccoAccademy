import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaEstrazioneComponent } from './prima-estrazione.component';

describe('PrimaEstrazioneComponent', () => {
  let component: PrimaEstrazioneComponent;
  let fixture: ComponentFixture<PrimaEstrazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaEstrazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaEstrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

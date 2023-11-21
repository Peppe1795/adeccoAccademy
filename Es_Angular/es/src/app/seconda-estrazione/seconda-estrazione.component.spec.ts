import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaEstrazioneComponent } from './seconda-estrazione.component';

describe('SecondaEstrazioneComponent', () => {
  let component: SecondaEstrazioneComponent;
  let fixture: ComponentFixture<SecondaEstrazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaEstrazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaEstrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

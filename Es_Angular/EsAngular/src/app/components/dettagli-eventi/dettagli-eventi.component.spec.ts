import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliEventiComponent } from './dettagli-eventi.component';

describe('DettagliEventiComponent', () => {
  let component: DettagliEventiComponent;
  let fixture: ComponentFixture<DettagliEventiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettagliEventiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliEventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

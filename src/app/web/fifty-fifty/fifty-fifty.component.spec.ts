import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiftyFiftyComponent } from './fifty-fifty.component';

describe('FiftyFiftyComponent', () => {
  let component: FiftyFiftyComponent;
  let fixture: ComponentFixture<FiftyFiftyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiftyFiftyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiftyFiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

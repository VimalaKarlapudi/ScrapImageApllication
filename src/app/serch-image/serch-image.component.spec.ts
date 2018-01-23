import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchImageComponent } from './serch-image.component';

describe('SerchImageComponent', () => {
  let component: SerchImageComponent;
  let fixture: ComponentFixture<SerchImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamObjectComponent } from './stream-object.component';

describe('StreamObjectComponent', () => {
  let component: StreamObjectComponent;
  let fixture: ComponentFixture<StreamObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

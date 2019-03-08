import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagereloadComponent } from './pagereload.component';

describe('PagereloadComponent', () => {
  let component: PagereloadComponent;
  let fixture: ComponentFixture<PagereloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagereloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagereloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

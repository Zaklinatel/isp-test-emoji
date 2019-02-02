import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllComponent } from './page-all.component';

describe('EmojisAllComponent', () => {
  let component: PageAllComponent;
  let fixture: ComponentFixture<PageAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

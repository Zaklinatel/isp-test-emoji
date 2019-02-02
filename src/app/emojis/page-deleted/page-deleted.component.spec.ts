import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDeletedComponent } from './page-deleted.component';

describe('PageFavoritesComponent', () => {
  let component: PageDeletedComponent;
  let fixture: ComponentFixture<PageDeletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDeletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiListComponent } from './list.component';

describe('ListComponent', () => {
  let component: EmojiListComponent;
  let fixture: ComponentFixture<EmojiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

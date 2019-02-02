import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAllComponent } from './page-all/page-all.component';
import { EmojisListComponent } from './emojis-list/emojis-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPopoverModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { EmojiComponent } from './emoji/emoji.component';
import { NgxPopper } from 'angular-popper';
import { PageFavoritesComponent } from './page-favorites/page-favorites.component';
import { PageDeletedComponent } from './page-deleted/page-deleted.component';

@NgModule({
  declarations: [
    PageAllComponent,
    EmojisListComponent,
    EmojiComponent,
    PageFavoritesComponent,
    PageDeletedComponent
  ],
  imports: [
    CommonModule,
    NgbTooltipModule,
    NgbPopoverModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    NgxPopper
  ]
})
export class EmojisModule { }

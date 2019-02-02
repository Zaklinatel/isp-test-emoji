import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Emoji } from '../emoji.interface';

@Component({
  selector: 'app-emojis-list',
  templateUrl: './emojis-list.component.html',
  styleUrls: ['./emojis-list.component.scss']
})
export class EmojisListComponent {
  @Input() emojis: Object;
  @Input() displayCount;
  @ContentChild('actionButtons') actionButtons: TemplateRef<any> | string;

  constructor() { }

  getContext(item: {key: string, value: string}): {$implicit: Emoji} {
    return {
      $implicit: {
        name: item.key,
        link: item.value
      }
    };
  }
}

import { Component, HostListener } from '@angular/core';
import { faCircleNotch, faRedo } from '@fortawesome/free-solid-svg-icons';
import { Emoji } from '../emoji.interface';
import { UserEmojisService } from '../user-emojis.service';

@Component({
  selector: 'app-page-deleted',
  templateUrl: './page-deleted.component.html',
  styleUrls: ['./page-deleted.component.scss']
})
export class PageDeletedComponent {
  title = 'Deleted';
  loading = true;
  faRedo = faRedo;
  faCircleNotch = faCircleNotch;
  displayCount = 50;
  emojisList: Object = {};

  constructor(private _userEmojis: UserEmojisService) {
    this._userEmojis.load().subscribe(userEmojis => {
      this.emojisList = userEmojis.deletedEmojis;
      this.loading = false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.clientHeight;
    const max = document.documentElement.scrollHeight;

    if (pos === max) {
      this.displayCount += 50;
    }
  }

  onRestoreClicked(emoji: Emoji) {
    this._userEmojis
      .restore(emoji.name)
      .save();
  }
}

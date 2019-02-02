import { Component, HostListener } from '@angular/core';
import { faCircleNotch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Emoji } from '../emoji.interface';
import { UserEmojisService } from '../user-emojis.service';

@Component({
  selector: 'app-page-favorites',
  templateUrl: './page-favorites.component.html',
  styleUrls: ['./page-favorites.component.scss']
})
export class PageFavoritesComponent {
  title = 'Favorite';
  loading = true;
  faTimes = faTimes;
  faCircleNotch = faCircleNotch;
  displayCount = 50;
  emojisList: Object = {};

  constructor(private _userEmojis: UserEmojisService) {
    this._userEmojis.load().subscribe(userEmojis => {
      this.emojisList = userEmojis.favoriteEmojis;
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

  onDeleteClicked(emoji: Emoji) {
    this._userEmojis
      .removeFavorite(emoji.name)
      .save();
  }
}

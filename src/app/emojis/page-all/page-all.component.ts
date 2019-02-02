import { Component, HostListener, OnInit } from '@angular/core';
import { GithubEmojisService } from '../github-emojis.service';
import { faCircleNotch, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Emoji } from '../emoji.interface';
import { UserEmojisService } from '../user-emojis.service';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-page-all',
  templateUrl: './page-all.component.html',
  styleUrls: ['./page-all.component.scss'],
})
export class PageAllComponent {
  title = 'All';
  loading = true;
  displayCount = 50;
  emojisList: Object = {};

  faStar = faStar;
  faTrash = faTrash;
  faCircleNotch = faCircleNotch;

  constructor(private _userEmojis: UserEmojisService) {
    this._userEmojis.load().subscribe(userEmojis => {
      this.emojisList = userEmojis.allEmojis;
      this.loading = false;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.displayCount < Object.keys(this.emojisList).length) {
      const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.clientHeight;
      const max = document.documentElement.scrollHeight;

      if (pos === max) {
        this.displayCount += 50;
      }
    }
  }

  onDeleteClicked(emoji: Emoji) {
    this._userEmojis
      .delete(emoji)
      .save();
  }

  onFavoriteClicked(emoji: Emoji) {
    if (this._userEmojis.isFavorite(emoji.name)) {
      this._userEmojis.removeFavorite(emoji.name);
    } else {
      this._userEmojis.addFavorite(emoji);
    }

    this._userEmojis.save();
  }

  getFavBtnClass(emojiName: string) {
    const isFavorite = this._userEmojis.isFavorite(emojiName);

    return {
      'btn-primary': isFavorite,
      'btn-secondary': !isFavorite
    };
  }

  getFavBtnTitle(emojiName: string): string {
    return this._userEmojis.isFavorite(emojiName)
      ? 'Remove from favorites'
      : 'Add to favorites';
  }
}

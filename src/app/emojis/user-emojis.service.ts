import { Injectable } from '@angular/core';
import { Emoji } from './emoji.interface';
import { GithubEmojisService } from './github-emojis.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserEmojisService {
  private static STORAGE_KEY = 'emojis__userData';

  private _favoriteEmojis: Object = {};
  private _deletedEmojis: Object = {};
  private _allEmojis: Object = {};

  private _loadObservable: Observable<UserEmojisService>;

  constructor(private _githubEmojis: GithubEmojisService) { }

  get favoriteEmojis() {

    return this._favoriteEmojis;
  }

  get deletedEmojis() {
    return this._deletedEmojis;
  }

  get allEmojis(): Object {
    return this._allEmojis;
  }

  addFavorite(emoji: Emoji): UserEmojisService {
    this.restore(emoji.name);
    this._favoriteEmojis[emoji.name] = emoji.link;
    return this;
  }

  delete(emoji: Emoji): UserEmojisService {
    this.removeFavorite(emoji.name);

    if (this._allEmojis[emoji.name] !== undefined) {
      delete this._allEmojis[emoji.name];
    }

    this._deletedEmojis[emoji.name] = emoji.link;
    return this;
  }

  removeFavorite(name: string): UserEmojisService {
    if (this._favoriteEmojis[name] !== undefined) {
      delete this._favoriteEmojis[name];
    }

    return this;
  }

  restore(name: string): UserEmojisService {
    if (this._deletedEmojis[name] !== undefined) {
      this._allEmojis[name] = this._deletedEmojis[name];
      delete this._deletedEmojis[name];
    }

    return this;
  }

  load(forceReload: boolean = false): Observable<UserEmojisService> {
    if (!this._loadObservable || forceReload) {
      const obs = this._githubEmojis.getList(forceReload);

      this._loadObservable = new Observable<UserEmojisService>(subscriber => {
        obs.subscribe(emojisList => {
          this.loadFromStorage();

          for (const emojiName in emojisList) {
            if (!emojisList.hasOwnProperty(emojiName)) {
              continue;
            }

            if (!this.isDeleted(emojiName)) {
              this._allEmojis[emojiName] = emojisList[emojiName];
            }
          }

          subscriber.next(this);
        });
      });
    }

    return this._loadObservable;
  }

  save(): UserEmojisService {
    localStorage.setItem(UserEmojisService.STORAGE_KEY, JSON.stringify({
      favoriteEmojis: this._favoriteEmojis,
      deletedEmojis: this._deletedEmojis
    }));

    return this;
  }

  isFavorite(name: string): boolean {
    return this._favoriteEmojis.hasOwnProperty(name);
  }

  isDeleted(name: string): boolean {
    return this._deletedEmojis.hasOwnProperty(name);
  }

  private loadFromStorage() {
    const data = JSON.parse(localStorage.getItem(UserEmojisService.STORAGE_KEY) || '{}');

    this._favoriteEmojis = data.favoriteEmojis || {};
    this._deletedEmojis = data.deletedEmojis || {};
  }
}

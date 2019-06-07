// Angular
import { Component, Input } from '@angular/core';

// Api
import { New } from '../../core';

const DEFAULT_IMAGE_URL: string = './assets/img/no-image.png';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() author?: string = '';
  @Input() publicationDate?: string = '';
  @Input() url?: string = '';
  @Input() set imgUrl(value: string) {
    this._imgUrl = value || DEFAULT_IMAGE_URL;
  }
  get imgUrl(): string {
    return this._imgUrl;
  }

  _imgUrl: string = DEFAULT_IMAGE_URL;

  onButtonClick($event: MouseEvent): void {
    if (!this.url) {
      return;
    }
    window.open(this.url, '_blank');
  }
}

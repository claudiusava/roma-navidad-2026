import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AudioPlayer } from '../core/audio-player';

@Component({
  selector: 'app-audio-sheet',
  templateUrl: './audio-sheet.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioSheet {
  protected readonly player = inject(AudioPlayer);
  protected readonly rates = [0.9, 1, 1.15, 1.3];
}

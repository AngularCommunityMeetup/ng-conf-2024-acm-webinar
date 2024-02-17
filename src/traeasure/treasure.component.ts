import {Component, Input} from '@angular/core';
import {Treasure} from "../treasure.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'treasure',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `
    <article>
      <header>
        <h1>{{ treasure.name }}</h1>
      </header>
      <img [src]="treasure.image" alt="{{ treasure.name }}" width="400" height="400">
      <p *ngIf="treasure.areDetailsVisible">{{ treasure.description }}</p>
      <footer>
        <button (click)="treasure.areDetailsVisible = !treasure.areDetailsVisible">Toggle Details</button>
      </footer>
    </article>
  `,
  styles: ``
})
export class TreasureComponent {
 @Input({required:true})
 treasure!: Treasure;
}

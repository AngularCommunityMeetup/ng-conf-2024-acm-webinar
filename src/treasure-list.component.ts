import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Treasure } from './treasure.model';
import { treasuresMock } from './treasures.mock';
import {TreasureComponent} from "./traeasure/treasure.component";

@Component({
	selector: 'treasure-list',
	imports: [CommonModule, TreasureComponent],
	standalone: true,
	template: `
		<h1>Discovering Angular 17's Hidden Treasures</h1>
		<main>
			<section class="treasures-container">
				<treasure *ngFor="let treasure of treasures" [treasure]="treasure"/>
			</section>
		</main>
  `,
})
export class TreasureListComponent {
	treasures: Treasure[] = treasuresMock;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { Treasure } from './treasure.model';
import { treasuresMock } from './treasures.mock';

@Component({
	selector: 'webinar-treasures',
	imports: [CommonModule],
	standalone: true,
	template: `
		<h1>Discovering Angular 17's Hidden Treasures</h1>
		<main>
			<section class="treasures-container">
				<article *ngFor="let treasure of treasures">
					<header>
						<h1>{{ treasure.name }}</h1>
					</header>
					<img [src]="treasure.image" alt="{{ treasure.name }}" width="400" height="400">
					<p *ngIf="treasure.areDetailsVisible">{{ treasure.description }}</p>
					<footer>
						<button (click)="treasure.areDetailsVisible = !treasure.areDetailsVisible">Toggle Details</button>
					</footer>
				</article>
			</section>
		</main>
  `,
})
export class WebinarTreasures {
	treasures: Treasure[] = treasuresMock;
}

bootstrapApplication(WebinarTreasures, {
	providers: []
});

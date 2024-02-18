import {Component, inject, Input} from '@angular/core';
import {Treasure, TreasureContents} from "./treasure.model";
import {NgForOf, NgIf} from "@angular/common";
import {TreasureContentsApiService} from "./treasure-contents-api.service";
import {lastValueFrom} from "rxjs";

@Component({
    selector: 'treasure',
    standalone: true,
    imports: [
        NgIf,
        NgForOf
    ],
    template: `
        <article>
            <header>
                <h1>{{ treasure.name }}</h1>
            </header>
            <img [src]="treasure.image" alt="{{ treasure.name }}" width="400" height="400">
            <p *ngIf="areDetailsVisible">{{ treasure.description }}</p>
            <footer>
                <button (click)="onToggleDetails()">Toggle Details</button>
                <ng-container *ngIf="contents">
                    <h2>Contents</h2>
                    <p *ngFor="let content of contents">
                        Packet of {{ content.name }} with a value {{ content.value }}
                    </p>
                </ng-container>
            </footer>
        </article>
    `,
    styles: ``
})
export class TreasureComponent {

    @Input({required: true}) treasure!: Treasure;

    areDetailsVisible = false;

    contentsApiService = inject(TreasureContentsApiService);

    contents: Array<TreasureContents> | undefined;

    async onToggleDetails() {
        this.areDetailsVisible = !this.areDetailsVisible;
        if (this.areDetailsVisible) {
            this.contents = await lastValueFrom(this.contentsApiService.getContents());
        }
    }
}

import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {TREASURE_CONTENTS as contents} from "./treasures.mock";
import {TreasureContents} from "./treasure.model";

@Injectable({
    providedIn: 'root'
})
export class TreasureContentsApiService {

    constructor() {
    }

    /**
     * Get the treasure contents.
     * NOTE: This is a mock service, it returns a random treasure contents after 3 seconds.
     */
    getContents(): Observable<Array<TreasureContents>> {
        const treasureContents = [
            contents[Math.floor(Math.random() * contents.length)],
            contents[Math.floor(Math.random() * contents.length)],
            contents[Math.floor(Math.random() * contents.length)],
        ]
        return of(treasureContents).pipe(delay(3000));
    }
}

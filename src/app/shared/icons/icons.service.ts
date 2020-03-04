import { Injectable } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

@Injectable({
    providedIn: 'root'
})

export class AppIconService {
    constructor() {
        return {
            faCartPlus,
            faFlag
        };
    }

}


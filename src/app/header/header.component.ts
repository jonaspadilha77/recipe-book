
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    collapsed = true;
    @Input() activeLink: string;
    @Output() changedLink = new EventEmitter();

    constructor() { }

    onChangeLink(route: string) {
        this.activeLink = route;
        this.changedLink.emit(this.activeLink);
    }

    setActiveLink(link: string) {
        return link && this.activeLink && link === this.activeLink;
    }

}






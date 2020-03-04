
import { Component, Output, EventEmitter, Input, DoCheck, OnInit } from '@angular/core';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { AppIconService } from '../shared/icons/icons.service';
import { CartService } from '../cart/cart.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
    collapsed = true;
    @Input() activeLink: string;
    @Output() changedLink = new EventEmitter();
    hasCartItems = false;

    constructor(private icons: AppIconService, private cartService: CartService) { }

    ngOnInit() {

    }
    ngDoCheck() {
        this.hasCartItems = !!this.cartService.items.length;
        console.log(this.cartService);
    }

    onChangeLink(route: string) {
        this.activeLink = route;
        this.changedLink.emit(this.activeLink);
    }

    setActiveLink(link: string) {
        return link && this.activeLink && link === this.activeLink;
    }

}






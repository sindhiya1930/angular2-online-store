import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'home-page',
    templateUrl: 'home-page.component.html',
    styleUrls: [
        'home-page.component.css'
    ],
    directives: [
        ROUTER_DIRECTIVES
    ]
})

export class HomePageComponent {
    private applicationTitle = "angular2-online-store";
    private description    = "This is simple online store of computers implemented with Angular2 to demonstrate how the framework shines and makes the way we create apps more logical and straightforward.";
    private repositoryLink = "https://github.com/IvanDobrovolsky/angular2-online-store";
    private bannerImageUrl = "https://www.ag-grid.com/images/angular2.png";
}
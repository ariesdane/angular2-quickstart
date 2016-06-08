import {Component, Input} from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>Selection Details</h2>
            <div>
                <label>Hero Id:</label>
                {{hero.id}}
            </div>
            <div>
                <label>Hero Name:</label>
                <input [(ngModel)]="hero.name" placeholder="Hero Name"/>
            </div>
        </div>
    `
})


export class HeroDetailComponent {
    @Input()
    hero: Hero;
}

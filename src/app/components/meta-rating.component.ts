import { Component, Input } from '@angular/core';
import { MetaDetailComponent } from '../components/meta-detail.component'
import { Meta } from "../meta";

@Component({
  selector: 'meta-rating',
  templateUrl: '../templates/meta-rating.component.html',
  styleUrls: [
    '../stylesheets/meta-rating.component.scss',
   '../stylesheets/shared/translucentBG.css',
   '../stylesheets/profile-panel.scss',
   '../stylesheets/shared/nav-bttns.css'
 ]
})

export class MetaRatingComponent {

/* The @Input decorator tells Angular that the following property is public and
  available for binding to a parent component.
  Without @Input, Angular refuses to bind to the property.*/
  @Input() chosenMeta: Meta;
}

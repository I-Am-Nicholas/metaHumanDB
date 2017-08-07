import { Component, OnInit, Input } from '@angular/core';
import { MetaDetailComponent } from '../components/meta-detail.component'

@Component({
  selector: 'meta-rating',
  templateUrl: '../templates/meta-rating.component.html',
  styleUrls: [
    '../stylesheets/meta-rating.component.scss',
   '../sharedBG.css']
})

export class MetaRatingComponent implements OnInit {

/* The @Input decorator tells Angular that the following property is public and
  available for binding to a parent component.

  Without @Input, Angular refuses to bind to the property.*/

  @Input() showRating: any;

  constructor(
  ) {}

  ngOnInit(): void  {
  }

}

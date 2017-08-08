import { Component, Input } from '@angular/core';
import { MetaDetailComponent } from '../components/meta-detail.component'
import { DomSanitizer } from '@angular/platform-browser';
import { Meta } from "../meta";

@Component({
  selector: 'meta-rating',
  templateUrl: '../templates/meta-rating.component.html',
  styleUrls: [
    '../stylesheets/meta-rating.component.scss',
   '../sharedBG.css']
})

export class MetaRatingComponent {

/* The @Input decorator tells Angular that the following property is public and
  available for binding to a parent component.

  Without @Input, Angular refuses to bind to the property.*/

  @Input() showRating: any;
  trusted: any;
  untrusted: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  security(level: number){
    this.untrusted = "height: " + level + "%";
    return this.trusted = this.sanitizer.bypassSecurityTrustStyle(this.untrusted);
  }

}

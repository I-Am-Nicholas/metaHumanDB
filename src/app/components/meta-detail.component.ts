import { Component, OnInit, Input } from '@angular/core';
import { Meta } from '../meta'


@Component({
  selector: 'meta-detail',
  styleUrls: ['../stylesheets/meta-detail.component.css', '../sharedBG.css'],
  templateUrl: '../templates/meta-detail.component.html'
})

export class MetaDetailComponent {
  @Input() valueFromMetasComponent: Meta;
}

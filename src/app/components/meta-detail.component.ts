import 'rxjs/add/operator/switchMap';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap }   from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MetaService } from '../meta-service';
import { Meta } from '../meta'


@Component({
  selector: 'meta-detail',
  styleUrls: ['../stylesheets/meta-detail.component.css', '../sharedBG.css'],
  templateUrl: '../templates/meta-detail.component.html'
})

export class MetaDetailComponent implements OnInit {

  @Input() clicked: Meta;

  constructor(
    private metaService: MetaService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.metaService.getMeta(this.clicked.id)
      .then((meta: Meta) => this.clicked = meta);
  }


}

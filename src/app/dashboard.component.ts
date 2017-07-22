import { Component, OnInit } from '@angular/core';

import { Meta } from './meta';
import { MetaService } from './meta-service'

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css', './sharedBG.css' ]
})

export class DashboardComponent implements OnInit {

  metas: Meta[] = [];
  metaInfo: Meta;

  constructor(private metaService: MetaService) {}

  ngOnInit(): void {
    this.metaService.getMetas()
      .then(metas => this.metas = metas.slice(0, 5));
  }

  onSelect(info: Meta): void {
    this.metaInfo = info;
  }

}

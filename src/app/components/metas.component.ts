import { Component, OnInit } from '@angular/core';

import { Meta } from '../meta';
import { MetaService } from '../meta-service';

@Component({
  templateUrl: '../templates/metas.component.html',
  styleUrls: ['../stylesheets/metas.component.css', '../sharedBG.css']
})

export class MetasComponent implements OnInit {

  metaShown: Meta[];//what will be returned by 'getTheMetas()' function.
  selectedMeta: Meta;

  constructor(//injected dependencies
    private metaService: MetaService,
  ) {}

  ngOnInit(): void {
    this.getTheMetas();
  }

  getTheMetas(): void {
    this.metaService.getMetas().then(metas => this.metaShown = metas);
  }

  onSelect(individualMeta: Meta): void {
    this.selectedMeta = individualMeta;
  }

}

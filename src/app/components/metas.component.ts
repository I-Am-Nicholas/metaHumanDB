import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meta } from '../meta';
import { MetaService } from '../meta-service';

@Component({
  templateUrl: '../templates/metas.component.html',
  styleUrls: ['../stylesheets/metas.component.css', '../sharedBG.css']
})

export class MetasComponent implements OnInit {

  metaShown: Meta[];

  constructor(
    private router: Router,
    private metaService: MetaService,
  ) { }

  ngOnInit(): void {
    this.getTheMetas();
  }

  getTheMetas(): void {
    this.metaService.getMetas().then(metas => this.metaShown = metas);
  }

  selectedMeta: Meta;

  onSelect(meta: Meta): void {
    this.selectedMeta = meta;
  }

}

import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Meta } from '../meta';
import { MetaService } from '../meta-service'

@Component({
  templateUrl: '../templates/dashboard.component.html',
  styleUrls: [ '../stylesheets/dashboard.component.css', '../sharedBG.css' ]
})

export class DashboardComponent implements OnInit {

  metas: Meta[] = [];

  constructor(
    private metaService: MetaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.metaService.getMetas()
      .then(metas => this.metas = metas.slice(0, 5));
  }

  onSelect(clicked: Meta) {
    this.router.navigate(['/detail', clicked.id ]);
  };

}

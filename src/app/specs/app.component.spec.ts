import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { findStringInNode } from '../../testing/find-string-in-node';
import { RouterLinkStubDirective } from "../../testing/router-stubs";
import { RouterOutletStubComponent } from "../../testing/router-stubs";
import { click } from "../../testing/clicker-left";

import { AppComponent } from '../components/app.component';

describe('AppComponent', () => {

  let comp: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  let DOMElement: DebugElement;
  let linkDes: DebugElement[];
  let links: RouterLinkStubDirective[];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      DOMElement = fixture.nativeElement.children;
      fixture.detectChanges();
      // find DebugElements with an attached RouterLinkStubDirective
      linkDes = fixture.debugElement
        .queryAll(By.directive(RouterLinkStubDirective));

      // get the attached link directive instances using the DebugElement injectors
      links = linkDes
        .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
      });
  }));


});

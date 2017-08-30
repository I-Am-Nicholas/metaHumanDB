import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { findStringInNode } from '../../testing/find-string-in-node';

import { AppComponent } from '../components/app.component';

describe('AppComponent', () => {

  let comp: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  let DOMElement:  DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule ],
      declarations: [ AppComponent ],
      providers: [{ provide: XHRBackend, useClass: MockBackend }]
    })

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    DOMElement = fixture.nativeElement.children;
  });


  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    let nodeTxt = DOMElement[0].querySelectorAll('h1');
    expect(findStringInNode(nodeTxt[0], 'META-HUMAN &nbsp; DATABASE')).toBe(true);
  });

});

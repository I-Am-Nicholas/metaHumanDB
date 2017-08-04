import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppComponent } from '../components/app.component';

describe('AppComponent', () => {

  let comp: AppComponent
  let fixture: ComponentFixture<AppComponent>;
  let HTMLnode: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule ],
      declarations: [ AppComponent ],
      providers: [{ provide: XHRBackend, useClass: MockBackend }]
    })

    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    HTMLnode = fixture.nativeElement;

  });


  it('should create the app', () => {
    expect(comp).toBeTruthy();
  });

  it(`should have the given text as title`, () => {
    expect(comp.title).toEqual('-HUMAN DATABASE');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    expect(HTMLnode.querySelector('h1').textContent).toContain('META-HUMAN DATABASE');
  });

  it("should render a nav button titled 'Dashboard'", () => {
    expect(HTMLnode.querySelector('#dashboard').textContent).toMatch('Dashboard');
  });

  it("should render a nav button titled 'Meta-Human List'", () => {
    expect(HTMLnode.querySelector('#metaList').textContent).toMatch('Meta-Human List');
  });

  it("should render a nav button titled 'anonymous'", () => {
    expect(HTMLnode.querySelector('#back').textContent).toMatch('Back');
  });
  

});
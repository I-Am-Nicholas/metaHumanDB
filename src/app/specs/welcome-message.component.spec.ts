import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement} from '@angular/core';

import { WelcomeMessageComponent } from '../components/welcome-message.component';

describe('WelcomeMessageComponent', () => {
  let component: WelcomeMessageComponent;
  let fixture: ComponentFixture<WelcomeMessageComponent>;
  let DOMElement:  DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMessageComponent);
    component = fixture.componentInstance;
    DOMElement = fixture.nativeElement.children;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be present in the DOM', () => {
    expect(DOMElement[0].querySelectorAll('#welcome-message')).toBeTruthy();
  });

  it('should display mocked text', () => {
    let message = DOMElement[0].querySelectorAll('#welcome-message')
    expect(message.textContent).not.toBe('');
  });

  
});

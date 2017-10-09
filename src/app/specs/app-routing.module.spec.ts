import { NO_ERRORS_SCHEMA } from "@angular/core";
import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

import { AppComponent } from "../components/app.component";
import { MetaDetailComponent } from "../components/meta-detail.component";
import { WelcomeMessageComponent } from "../components/welcome-message.component";
import { NavResetService } from "../services/nav-reset.service";

import { routes } from "../app-routing.module";

let router: Router;
let location: Location;
let fixture;

describe("Router: App", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        WelcomeMessageComponent,
        MetaDetailComponent,
        AppComponent
      ],
      providers: [ NavResetService ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
  });

  describe("navigating to ", () => {

    it("'' should redirect you to /welcome", fakeAsync(() => {
      router.navigate([""]);
      tick(); //wait for promise to resolve.
      expect(location.path()).toBe("/welcome");
    }));

    it("a nonsensical route should redirect you to /welcome", fakeAsync(() => {
      router.navigate(["Mrmxyzptlk"]);
      tick();
      expect(location.path()).toBe("/welcome");
    }));

    it("a correct route should be accepted/not directed to welcome", fakeAsync(() => {
      router.navigate(["detail/1"]);
      tick();
      expect(location.path()).not.toBe("/welcome");
      expect(location.path()).toBe("/detail/1");
    }));

  });

});

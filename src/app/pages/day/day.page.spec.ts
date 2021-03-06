import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { DayPage } from "./day.page";

describe("DayPage", () => {
  let component: DayPage;
  let fixture: ComponentFixture<DayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DayPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(DayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

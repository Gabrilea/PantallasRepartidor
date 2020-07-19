import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProblemasPage } from './problemas.page';

describe('ProblemasPage', () => {
  let component: ProblemasPage;
  let fixture: ComponentFixture<ProblemasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

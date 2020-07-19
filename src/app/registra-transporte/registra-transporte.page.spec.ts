import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistraTransportePage } from './registra-transporte.page';

describe('RegistraTransportePage', () => {
  let component: RegistraTransportePage;
  let fixture: ComponentFixture<RegistraTransportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistraTransportePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistraTransportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

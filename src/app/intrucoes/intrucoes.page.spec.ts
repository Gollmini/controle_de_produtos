import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntrucoesPage } from './intrucoes.page';

describe('IntrucoesPage', () => {
  let component: IntrucoesPage;
  let fixture: ComponentFixture<IntrucoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntrucoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntrucoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

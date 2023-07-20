import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IftverificationdataComponent } from './iftverificationdata.component';

describe('IftverificationdataComponent', () => {
  let component: IftverificationdataComponent;
  let fixture: ComponentFixture<IftverificationdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IftverificationdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IftverificationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

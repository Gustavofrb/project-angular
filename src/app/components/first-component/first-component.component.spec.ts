import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtComponentComponent } from './first-component.component';

describe('FirtComponentComponent', () => {
  let component: FirtComponentComponent;
  let fixture: ComponentFixture<FirtComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirtComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

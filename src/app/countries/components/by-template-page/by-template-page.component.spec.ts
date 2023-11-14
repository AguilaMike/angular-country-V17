import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByTemplatePageComponent } from './by-template-page.component';

describe('ByTemplatePageComponent', () => {
  let component: ByTemplatePageComponent;
  let fixture: ComponentFixture<ByTemplatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByTemplatePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebGlContainerComponent } from './web-gl-container.component';

describe('WebGlContainerComponent', () => {
  let component: WebGlContainerComponent;
  let fixture: ComponentFixture<WebGlContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebGlContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebGlContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonParseComponent } from './json-parse.component';

describe('JsonParseComponent', () => {
  let component: JsonParseComponent;
  let fixture: ComponentFixture<JsonParseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonParseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonParseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

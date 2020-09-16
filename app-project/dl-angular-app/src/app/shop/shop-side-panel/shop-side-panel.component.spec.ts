import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSidePanelComponent } from './shop-side-panel.component';

describe('ShopSidePanelComponent', () => {
  let component: ShopSidePanelComponent;
  let fixture: ComponentFixture<ShopSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

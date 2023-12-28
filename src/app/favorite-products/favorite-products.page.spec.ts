import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteProductsPage } from './favorite-products.page';

describe('FavoriteProductsPage', () => {
  let component: FavoriteProductsPage;
  let fixture: ComponentFixture<FavoriteProductsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FavoriteProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

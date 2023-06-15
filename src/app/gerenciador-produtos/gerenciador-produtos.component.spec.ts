import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorProdutosComponent } from './gerenciador-produtos.component';

describe('GerenciadorProdutosComponent', () => {
  let component: GerenciadorProdutosComponent;
  let fixture: ComponentFixture<GerenciadorProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciadorProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciadorProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

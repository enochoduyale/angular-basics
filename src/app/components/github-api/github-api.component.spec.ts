import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubApiComponent } from './github-api.component';

describe('GithubApiComponent', () => {
  let component: GithubApiComponent;
  let fixture: ComponentFixture<GithubApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubApiComponent]
    });
    fixture = TestBed.createComponent(GithubApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

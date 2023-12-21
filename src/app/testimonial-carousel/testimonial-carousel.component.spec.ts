import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestimonialCarouselComponent } from './testimonial-carousel.component';

describe('TestimonialCarouselComponent', () => {
  let component: TestimonialCarouselComponent;
  let fixture: ComponentFixture<TestimonialCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimonialCarouselComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

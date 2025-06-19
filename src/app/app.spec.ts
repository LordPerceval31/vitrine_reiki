import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Title, Meta } from '@angular/platform-browser';
import { AppComponent } from './app';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titleSpy: jasmine.SpyObj<Title>;
  let metaSpy: jasmine.SpyObj<Meta>;

  beforeEach(async () => {
    // Créer les mocks
    titleSpy = jasmine.createSpyObj('Title', ['setTitle']);
    metaSpy = jasmine.createSpyObj('Meta', ['addTag']);

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: Title, useValue: titleSpy },
        { provide: Meta, useValue: metaSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set the correct title', () => {
    expect(titleSpy.setTitle).toHaveBeenCalledWith('Jocelyne DUBA Reiki');
  });

  it('should add keywords meta tag', () => {
    expect(metaSpy.addTag).toHaveBeenCalledWith({
      name: 'keywords',
      content: 'reiki, annales akashiques, bien-être, guérison, Jocelyne Duba'
    });
  });

  it('should add author meta tag', () => {
    expect(metaSpy.addTag).toHaveBeenCalledWith({
      name: 'author',
      content: 'Jocelyne Duba'
    });
  });

  it('should call addTag twice for meta tags', () => {
    expect(metaSpy.addTag).toHaveBeenCalledTimes(2);
  });
});
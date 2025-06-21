import { ScrollService } from "./scroll";

describe('ScrollService', () => {
  let service: ScrollService;

  beforeEach(() => {
    service = new ScrollService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have scrollTo method', () => {
    expect(typeof service.scrollTo).toBe('function');
  });

  it('should have scrollToTop method', () => {
    expect(typeof service.scrollToTop).toBe('function');
  });

it('should call window.scrollTo when scrollToTop is called', () => {
  spyOn(window, 'scrollTo');
  service.scrollToTop();
  expect(window.scrollTo).toHaveBeenCalled();
});

it('should scroll to element when scrollTo is called', () => {
  spyOn(document, 'getElementById').and.returnValue({
    scrollIntoView: jasmine.createSpy('scrollIntoView')
  } as any);
  
  service.scrollTo('contact');
  
  expect(document.getElementById).toHaveBeenCalledWith('contact');
});

});
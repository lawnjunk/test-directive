'use strict';


describe('testing app-gallery-item', function(){

  beforeEach(() => {
    angular.mock.module('demoApp');
    angular.mock.inject(($compile, $rootScope) => {
      let scope = $rootScope.$new();
      let elem = angular.element('<app-gallery-item></app-gallery-item>');
      this.galleryItem = $compile(elem)(scope);
      scope.$digest();
    });
  });

  it('should have the correct title', () => {
    let iScope = this.galleryItem.isolateScope();
    expect(iScope.title).toBe('happy buddy');
  });

  it('should have the correct title', () => {
    let heading = this.galleryItem.find('h2');
    let iScope = this.galleryItem.isolateScope();
    expect(iScope.title).toBe('happy buddy');
    expect(heading.text()).toBe(' happy buddy');
  });

  it('should have the correct image', () => {
    let img= this.galleryItem.find('img');
    let iScope = this.galleryItem.isolateScope();
    expect(iScope.url).toBe('http://www.halloweenclipart.com/halloween_clipart_images/happy_female_monster_or_alien_with_a_cyclops_eye_0071-0911-1622-2258_SMU.jpg');
    expect(img.attr('src')).toBe('http://www.halloweenclipart.com/halloween_clipart_images/happy_female_monster_or_alien_with_a_cyclops_eye_0071-0911-1622-2258_SMU.jpg');
  });
});

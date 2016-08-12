'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.directive('appGalleryItem', function(){
  return {
  restrict: 'E', 
  replace: true,
  template: require('./gallery-item.html'),
  scope: {},
  link: function(scope, elem, attr) {
    scope.url = 'http://www.halloweenclipart.com/halloween_clipart_images/happy_female_monster_or_alien_with_a_cyclops_eye_0071-0911-1622-2258_SMU.jpg';
    scope.title = 'happy buddy';

    elem.on('mouseenter', function(){
      elem.addClass('focus');
    });

    elem.on('mouseleave', function(){
      elem.removeClass('focus');
    });
  }
  }
});

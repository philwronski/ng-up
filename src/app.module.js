import angular from 'angular';

import UpDirective from './directives/up.directive';
import UpBtnDirective from './directives/up-btn.directive';
import UpImgDirective from './directives/up-img.directive';
import UpClearDirective from './directives/up-clear.directive';

import UpService from './directives/up.service';

import { global, upload } from './app.constants';

//import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import './scss/up.scss';

//import bootstrap from 'bootstrap';

angular
    .module('app', [])
    .constant('UPLOAD', upload)
    .service('UpService', UpService)
    .directive('up', UpDirective.directiveFactory)
    .directive('upBtn', UpBtnDirective.directiveFactory)
    .directive('upImg', UpImgDirective.directiveFactory)
    .directive('upClear', UpClearDirective.directiveFactory)
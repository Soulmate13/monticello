import sliders from './sliders';
import AOS from 'aos';
import burger from './burger';
import map from './map';
import modernizr from './modernizr-custom';
import 'lazysizes';

AOS.init();


$(document).ready(function () {
    sliders();
    burger();
    map();
    modernizr();
});
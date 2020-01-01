import sliders from './sliders';
import AOS from 'aos';
import burger from './burger';
import map from './map';
AOS.init();


$(document).ready(function () {
    sliders();
    burger();
    map();
});
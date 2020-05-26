'use strict';

$(document).ready(function(){
    $('#open_nav, #close_nav').on('click', function(){
        $('#nav').toggleClass('show');
    });
});
import $ from 'jquery';

export default $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    // fix for IE `this.hostname` always returning an empty string
    let domain;
    if (this.href.indexOf("://") > -1) {
        domain = this.href.split('/')[2];
    } else {
        domain = this.href.split('/')[0];
    }
    domain = domain.split(':')[0];
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === (this.hostname || domain)) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
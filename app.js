$(function () 
{
  $(document).scroll(function () 
  {
    var $nav = $("#mainNavbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height()/2);
    $nav.toggleClass('fixed-top', $(this).scrollTop() > $nav.height()/2);

    var $drop = $(".dropdown-menu");
    $drop.toggleClass('scrolled', $(this).scrollTop() > $nav.height()/2);
  });
});
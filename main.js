/* Using jQuery */
(function($) {

  $(window).bind('resize', function(e)
  {
    if (window.RT) clearTimeout(window.RT);
    window.RT = setTimeout(function()
    {
      this.location.reload(false); /* false to get page from cache */
    }, 100);
  });


// $('#myModal').on('shown.bs.modal', function () {
//   $('#myInput').focus()
// })

    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave'
      }
    });

    ctrl.scrollTo(function(target) {

      TweenMax.to(window, 0.7, {
        scrollTo : {
          y : target, // scroll position of the target along y axis
          autoKill : true // allows user to kill scroll action smoothly
        },
        ease : Cubic.easeInOut
      });
    });

    $(document).on("click", "a[href^=#]", function(e) {
      var id = $(this).attr("href");

      if($(id).length > 0) {
        e.preventDefault();

      // trigger scroll
      ctrl.scrollTo(id);

      // If supported by the browser we can also update the URL
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, id);
      }
    }

  });

  // Create scene
  $("section").each(function() {

    new ScrollMagic.Scene({
      triggerElement: this
    })
    .setPin(this)
    .addTo(ctrl);

  });

})(jQuery);

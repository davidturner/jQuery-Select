(function($){
  $.fn.extend({
    customStyle : function(options) {
      var defaults = {
          selClass: 'custom-select',
          labelClass: 'custom-select-label'
      };
      options =  $.extend(defaults, options);
      if(!$.browser.msie){
        return this.each(function() {
            var select = $(this),
                val = select.find(":selected"),
                name = select.prop('id'),
                o = options,
                label, time;
          if(typeof name === 'undefined'){
            time =  new Date();
            name = 'select-id-' + time.getTime();
            select.prop('id', name);
          }
          select.addClass(o.selClass).after('<label class="'+o.labelClass+'" for="' + name + '">'+val.text()+'</label>');
          label = select.next();
          select.change(function(){
            label.text(select.val());
          });
        });
      }
    }
  });
})(jQuery);
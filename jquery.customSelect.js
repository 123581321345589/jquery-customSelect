(function($) {

  $.fn.customSelect = function(action) {

    action = action || 'init';

    var lng = {
      'no_options': 'Пусто',
      'no_results': 'Ничего не найдено'
    };

    if (action == 'init') {
      return this.each(function(i, e) {

        var
        def_select  = $(e),
        def_options = def_select.find('option'),
        is_multiple = def_select.attr('multiple') ? true : false,
        is_search   = def_select.hasClass('no_search') ? false : true;
        is_options  = def_options.length ? true : false;
        is_search   = is_search && is_options ? true : false;

        if (def_select.next('.select').length) return;

        // Скрыть дефолтный селект
        def_select.hide();

        // Блок поиска
        var html_search = is_search ? '<div class="search"><input type="text" name="custom_select_search"></div>' : '';

        // Блок поиска
        var html_options = is_options ? '' : '<div class="message empty">'+lng.no_options+'</div>';

        // Создать каркас
        def_select.after('<div class="select"><div class="header"><div class="title"><div class="cover"></div></div><div class="toggle"></div></div><div class="body">'+html_search+'<div class="options">'+html_options+'</div></div></div>');

        var
        custom  = def_select.next('.select'),
        header  = custom.find('.header'),
        title   = header.find('.title .cover'),
        body    = custom.find('.body'),
        options = body.find('.options'),
        option  = options.find('.option'),
        search  = body.find('.search input');

        // Показать селект
        custom.animate({ opacity: 1 }, 300);

        // Вставить все доступные пункты
        if (def_options.length) {
          $.each(def_options, function(i, item) {
            var item = $(item);
            if (item.text() == '') return;
            options.append('<div class="option" data-value="'+item.val()+'">'+item.text()+'</div>');
          });
        }

        // Вставить плейсхолдер
        selected_options();

        /* События
        *******************************************************************************
        */

        // При смене значения в дефолтном селекте
        def_select.on('change', function() {
          selected_options();
        });

        // При клике вне селекта
        $(window).on('click', function(e) {
          if (!$(e.target).hasClass('custom')
          &&  !$(e.target).hasClass('select')
          &&  !$(e.target).closest('.select').length) {
            dropdown_close();
          }
        });

        // При клике по шапке
        header.on('click', function(e) {

          var target = $(e.target);

          // При клике по пункту в шапке
          if (target.hasClass('choice')) {
            options.find('.option[data-value="'+target.data('value')+'"]').trigger('click');
          }

          else {
            toggle_dropdown();
          }

          return false;

        });

        // При клике по пункту
        options.find('.option').on('click', function() {

          var
          new_item   = $(this),
          new_title  = new_item.text(),
          new_value  = new_item.data('value').toString(),
          is_current = def_select.val().indexOf(new_value) < 0 ? false : true;

          // Выделить пункт в дефолтном селекте
          def_select.find('option').filter(function() {
            return ($(this).text() == new_title) ? true : false;
          }).prop('selected', (is_current ? false : true));

          new_item.toggleClass('selected');

          // Единичный выбор (НЕ множественный)
          if (!is_multiple) {
            toggle_dropdown();
          }

          selected_options();

        });

        // Поиск
        search.on('keyup', function() {
          var val = search.val();

          // Искать
          if (val.length > 2) {
            var v = 0;
            options.find('.no_results').remove();
            options.find('.option').each(function (i, e) {
              var item = $(e);
              if (item.text().indexOf(val) == -1) {
                item.hide(300);
              }
              else {
                item.show(300);
                v++;
              }
            });
            if (v == 0) {
              options.append('<div class="message no_results">'+lng.no_results+'</div>')
            }
          }

          // Сбросить фильтр
          else {
            options.find('.no_results').remove();
            options.find('.option').show(300);
          }

        });

        /* Функции
        *******************************************************************************
        */

        function toggle_dropdown() {
          if (custom.hasClass('opend')) {
            dropdown_close();
          }
          else {
            dropdown_open();
          }
        }

        function dropdown_open() {
          dropdown_close_all();
          custom.addClass('opend');
          body.fadeIn(400, function() {
          });
          def_select.blur();
          body.find('.search input').focus();
        }

        function dropdown_close() {
          body.fadeOut(400, function() {
            custom.removeClass('opend');
          });
          body.find('.search input').val('').blur();
        }

        function dropdown_close_all() {
          var select_opend = $('.select.opend');
          select_opend.removeClass('opend');
          select_opend.find('.body').fadeOut();
          select_opend.find('.body .search input').val('').blur();
        }

        function selected_options() {
          title.html('');
          var selected = def_options.filter(':selected');
          if (selected.length) {
            selected.each(function(i, e) {
              var item = $(e);
              title.append('<span class="choice" data-value="'+item.val()+'">'+item.text()+'</span>');
            });
          }
          else {
            title.append('<span class="placeholder">'+def_select.attr('placeholder')+'</span>');
          }
        }

      });
    }

    if (action == 'reinit') {
      return this.each(function(i, e) {
        var select = $(e),
            custom = select.next('.select');
        if (custom.length) {
          custom.animate({ opacity: 0 }, 300, function(){
            custom.remove();
            select.customSelect();
          });
        }
      });
    }

  }

})(jQuery);

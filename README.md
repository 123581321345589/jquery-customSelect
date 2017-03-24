# Custom Select 1.0

Кастомный блок выпадающего списка `<select>` с возможностью поиска и гибкой настройкой стилей. По умолчанию выглядит так:
<img src="http://clearex.ru/wp-content/uploads/2017/03/customselect.jpg" alt="">

## Подключение:

```html
<link rel="stylesheet" href="customSelect.min.css">
<script src="http://pre.jquery.com/jquery-3.1.1.min.js"></script>
<script src="jquery.customSelect.min.js"></script>
```

## HTML:

```html
<select name="" placeholder="Placeholder" style="display:none" multiple>
  ...
</select>
```

## Функционал:

```js
jQuery(document).ready(function($) {

  // Инициализация
  $('select').customSelect();

  // Реинициализация (после изменения пунктов в стандартном селекте)
  $('select').customSelect('reinit');

});
```

## Все селекторы стилей:

```css
.select {}
.select.opend {}
.select .header {}
.select .header .title {}
.select .header .title .cover {}
.select .header .title .placeholder {}
.select .header .title .choice {}
.select .header .title .choice:first-child {}
.select .header .title .choice:hover {}
.select .header .toggle {}
.select .header .toggle:before {}
.select.opend .header .toggle:before {}
.select .header:hover .toggle:before {}
.select .body {}
.select .body .search {}
.select .body .search input {}
.select .body .options {}
.select .body .options .message {}
.select .body .options .message.empty {}
.select .body .options .message.no_results {}
.select .body .options .option {}
.select .body .options .option:hover {}
.select .body .options .option.selected {}
.select .body .options .option.selected:hover {}
.select .body .options .option + .option {}
```

## HTML на выходе:

```html
<div class="select" style="opacity: 1;">
  <div class="header">
    <div class="title">
      <div class="cover">
        <span class="placeholder">Placeholder</span>
      </div>
    </div>
    <div class="toggle"></div>
  </div>
  <div class="body">
    <div class="options">
      <div class="option" data-value="0">Option 0</div>
      ...
    </div>
  </div>
</div>
```

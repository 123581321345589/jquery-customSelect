# Custom Select 1.0

<p>Кастомный блок выпадающего списка &lt;select&gt; с возможностью поиска и гибкой настройкой стилей. По умолчанию выглядит так:</p>
<p><img src="http://clearex.ru/wp-content/uploads/2017/03/customselect.jpg" alt=""></p>

<h2>Подключение:</h2>
<pre><code>
&lt;link rel="stylesheet" href="customSelect.min.css"&gt;
&lt;script src="http://pre.jquery.com/jquery-3.1.1.min.js"&gt;&lt;/script&gt;
&lt;script src="jquery.customSelect.min.js"&gt;&lt;/script&gt;
</code></pre>

<h2>HTML:</h2>
<pre><code>
&lt;select name="" placeholder="Placeholder" style="display:none" multiple&gt;
  ...
&lt;/select&gt;
</code></pre>

<h2>Функционал:</h2>
<pre><code>
jQuery(document).ready(function($) {

  // Инициализация
  $('select').customSelect();

  // Реинициализация (после изменения пунктов в стандартном селекте)
  $('select').customSelect('reinit');

});
</code></pre>

<h2>Все селекторы стилей:</h2>
<pre><code>
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
</code></pre>

<h2>HTML на выходе:</h2>
<pre><code>
&lt;div class="select" style="opacity: 1;"&gt;
  &lt;div class="header"&gt;
    &lt;div class="title"&gt;
      &lt;div class="cover"&gt;
        &lt;span class="placeholder"&gt;Placeholder&lt;/span&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="toggle"&gt;&lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="body"&gt;
    &lt;div class="options"&gt;
      &lt;div class="option" data-value="0"&gt;Option 0&lt;/div&gt;
      ...
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre>

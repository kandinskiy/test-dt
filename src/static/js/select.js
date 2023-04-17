function MySelectVisual(selector, properties) {

  if (!document.querySelectorAll(selector).length) return;

  Array.from(document.querySelectorAll(selector)).forEach((elem) => {

    // Работа с селектом
    elem.style.position = 'absolute';
    elem.style.width = '1px';
    elem.style.height = '1px';
    elem.style.opacity = '0';
    elem.style.zIndex = '-1';
    elem.setAttribute('tabindex', '-1');

    let wrapper = document.createElement("div"), // Обертка для встраивания
        options = document.createElement("div"),
        input = document.createElement("input"),
        name_select = 'js-select-' + elem.getAttribute('name'),
        watch;

    wrapper.classList.add('js-select__wrapper');

    options.classList.add('js-select__options');

    // Создание блоков от option
    Array.from(elem.querySelectorAll('option')).forEach((option, key) => {
      let div = document.createElement("div");
      div.textContent = option.textContent;
      div.setAttribute('data-value', option.getAttribute('value'));
      div.classList.add('js-select__option');
      if (!option.hasAttribute('value') || option.getAttribute('value') === '') div.classList.add('js-select__default');
      if (key === 0 || option.hasAttribute('selected')) {
        input.setAttribute('value', option.textContent);
        (!option.hasAttribute('value') || option.getAttribute('value') === '') ?
          input.classList.add('js-select__default') : input.classList.remove('js-select__default');
      }
      div.addEventListener('click', (e) => {
        input.setAttribute('value', e.target.innerText);
        (e.target.classList.contains('js-select__default')) ?
          input.classList.add('js-select__default') : input.classList.remove('js-select__default');
        elem.selectedIndex = key;
      });
      options.appendChild(div);
    });

    input.type = "text";
    input.classList.add('js-select__input');
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('id', name_select);
    input.addEventListener('focus', () => {
      watch = setInterval(() => {
        options.style.top = (input.getBoundingClientRect().bottom + pageYOffset) + 'px';
        options.style.left = input.getBoundingClientRect().left + 'px';
        options.style.width = input.getBoundingClientRect().width + 'px';
      }, 50);
      options.style.display = 'block';
    });
    input.addEventListener('blur', () => {
      clearInterval(watch);
      setTimeout(() => {
        options.style.display = 'none';
      }, 200);
    });

    elem.addEventListener('change', (e) => {
      input.setAttribute('value', e.target.value);
    });

    wrapper.appendChild(input);
    document.body.appendChild(options);

    if (properties.svg_arrow) {
      let label = document.createElement("label");
      label.setAttribute('for', name_select);
      label.classList.add('js-select__arrow');
      label.innerHTML = properties.svg_arrow;
      label.addEventListener('mousedown', (e) => {
        e.preventDefault();
        options.style.display = 'block';
        input.focus();
      });
      wrapper.appendChild(label);
    }

    elem.insertAdjacentElement('afterend', wrapper);

  });

}

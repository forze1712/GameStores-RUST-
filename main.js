// Создание блока widget
var widget = document.createElement('div');
widget.textContent = 'Это виджет'; // Текст в блоке виджет

// Добавление класса для стилизации извне
widget.classList.add('widget');

// Добавление блока виджет в body документа
document.body.appendChild(widget);

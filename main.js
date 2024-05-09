
// Устанавливаем обработчик, который будет вызван после загрузки скрипта
script.onload = function() {
    // Создание блока widget
    var widget = document.createElement('div');
    widget.textContent = 'Это виджет'; // Текст в блоке виджет

    // Применение класса для стилей
    widget.classList.add('widget');

    // Добавление блока виджет в body документа
    document.body.appendChild(widget);
};

   // Создаем новый элемент <div>
    const newBlock = document.createElement('div');
    // Добавляем содержимое файла в новый блок
    newBlock.textContent = content;
    
    // Получаем ссылку на элемент с id "container"
    const container = document.getElementById('container');
    // Вставляем новый блок в конец контейнера
    container.appendChild(newBlock);

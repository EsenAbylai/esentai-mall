function generateText1() {
    const texts = [
        "Главная",
        "О Esentai Mall",
        "Новости и события",
        "Магазины",
        "Сервисы",
        "Рестораны",
        "Развлечения",
        "О приложении",
        "Контакты",
        "Tax Free"
    ];

    const div = document.createElement('div');
    div.classList.add('text1');

    texts.forEach(text => {
        const h5 = document.createElement('h5');
        h5.textContent = text;
        div.appendChild(h5);

        h5.addEventListener('mouseenter', () => {
            h5.style.borderBottom = '1px solid orange';
        })
        h5.addEventListener('mouseleave', () => {
            h5.style.borderBottom = 'none';
        })
    });

    return div;
}

let menu = document.querySelector('.header2')
menu.appendChild(generateText1())

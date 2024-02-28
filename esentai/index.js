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


let products = [
    {
        id: 1,
        name: "APM Monaco в Esentai Mall",
        img: "https://api.esentai.com/storage/news_and_events/February2024/J9yhYnsqJ9kc7SVEUuIV.JPG",
        text:"На 3-м этаже Esentai Mall открылся бутик ювелирного бренда APM Monaco.",
        text2:"Название APM происходит от имени основательницы Ариан Прэтт, а М символизирует место рождения марки – Монако. С момента своего основания в 1982 году бренд заслужил признание во всем мире благодаря стильным коллекциям и концепции «динамичного потребления», когда ассортимент обновляется практически ежемесячно с учетом актуальных трендов. Используя в своих изделиях высококачественное серебро, цирконий и полудрагоценные камни, APM Monaco предлагает умело сочетать различные по стилистике украшения как женщинам, так и мужчинам. Лицом новой рекламной кампании стал гонщик Формулы-1 Шарль Леклер",
    
    },
    {
        id: 2,
        name: "Lacoste в Esentai Mall",
        img: "https://api.esentai.com/storage/news_and_events/January2024/rnPpr68DLuEKOy1U2c0y.JPG",
        text:"Знаменитый бренд премиальной спортивной одежды Lacoste открыл свои двери на 3-м этаже Esentai Mall.",
        text2:"История марки началась во Франции в 1933 году, когда всемирно известный теннисист Рене Лакост по прозвищу «Аллигатор» придумал поло – хлопковую рубашку с коротким рукавом без жесткого воротника. С тех пор Lacoste запустили массовое производство поло для игры в теннис, гольф и занятий парусным спортом. В 1952 году вышла коллекция цветных поло, имевших большой успех. Именно Lacoste стали первыми пришивать свой логотип на внешнюю сторону рубашки, что сразу демонстрировало высокий статус ее обладателя.Сейчас в мире насчитывает более 1000 бутиков бренда, где представлены женская и мужская линии одежды, а также обувь и аксессуары.",
    },
    {
        id: 3,
        name: "Новогодняя съемка от Esentai Mall",
        img: "https://api.esentai.com/storage/news_and_events/December2023/jGtBtOs9eqlNbcoduDME.jpg",
        text:"Когда речь заходит о праздновании Нового года, мы представляем изысканные вечерние платья, блестящие мини, а иногда даже белые смокинги. В праздничной съемке Esentai Mall предлагает разные образы, объединяя самые последние тренды и вечную классику.",
        text2:"Любительницам чувственных силуэтов стоит обратить внимание на вечернее платье Saint Laurent с рукавами-перчатками. Черно-белая гамма коктейльных платьев из бутика MOT подойдет адептам классики. А если в ваших планах – зажигательная вечеринка, то мини от Louis Vuitton подружатся как с туфлями, так и с ботильонами. Встречать Новый год с подругой можно в matching power suits от Magda Butrym с фирменными красными розами, а в образах от Fendi, Elisabetta Franchi и Seven Life Store обыгрываются пайетки, кристаллы и блестки – так что праздничное настроение вам обеспечено!",
    },
    {
        id: 4,
        name: "Коллекция Prada Linea Rossa в Esentai Mall",
        img: "https://api.esentai.com/storage/news_and_events/November2023/DAKM1YQVoZw8Vvh0JGqC.JPG",
        text:"В новой рекламной кампании Prada Linea Rossa бренд выводит свою спортивную линию на ещё более высокий уровень – изделия на фоне потрясающих горных пейзажей Исландии и Швейцарии запечатлели знаменитые фотографы Крис Люди и Райан Макгинли.",
        text2:"Коллекция Linea Rossa, традиционно ориентированная на активные зимние виды спорта, строится вокруг безграничных возможностей человеческого тела и передовых технологий. Например, трикотаж повторяет форму тела, тем самым не сковывает движений, а регенерированный нейлон Re-Nylon пригоден для дальнейшей переработки. Пух Prada Extreme-Tex обладает антибактериальными и терморегулирующими свойствами благодаря уникальной графеновой мембране. Свитера выполнены из сертифицированной Woolmark шерсти мериноса, не содержащей металлов и хлора. Именно поэтому первозданные арктические ледники и скальные рельефы прекрасно подошли для изделий со знаменитой «красной линией» Prada.Новая коллекция Prada Linea Rossa уже представлена в фирменном бутике на 1-м этаже Esentai Mall.",
    },
    {
        id: 5,
        name: "Изменения в программе лояльности Esentai Mall",
        img: "https://api.esentai.com/storage/news_and_events/July2023/rujSbs4XWDA45VV9k23s.jpg",
        text:"С 3-го апреля 2023 года Esentai Mall обновляет условия программы лояльности:",
        text2:"1. Накопление бонусов* на всех уровнях приостанавливается на неопределённый срок2. Оплата бонусами в размере 50% от чека для пользователей Black действует до 31 августа 2023 года3. Пользователи Black получают 3 часа бесплатной парковки в Esentai MallВсе пользователи Black** сохраняют свои привилегии:1. Скидка 50% на valet parking2. Бесплатная сессия со стилистом Personal Shopping Service в день рожденияОплата паркинга через мобильное приложение сохраняется. Для пользователей Orange первый час парковки бесплатно.*Бонусы по чекам, которые будут предоставлены до 2 апреля 2023 года включительно, начисляются в обычном режиме. **Статус Black фиксируется по состоянию на 2 апреля 2023 года и действует до 2 апреля 2024 года.",
    
    }
]

function createEsentaiFoto(i) {
    // Create div element with class "esentai-foto"
    const esentaiFotoDiv = document.createElement("div");
    esentaiFotoDiv.id=i.id
    esentaiFotoDiv.addEventListener("click", () => {
        window.location.href = `card.html?id=${i.id}`
    })
    esentaiFotoDiv.className = "esentai-foto";
    esentaiFotoDiv.style.backgroundImage = `url(${i.img})`

    esentaiFotoDiv.addEventListener('mouseenter', () => {
        esentaiFotoDiv.style.filter = 'brightness(70%)'
    })
    esentaiFotoDiv.addEventListener('mouseleave', () => {
        esentaiFotoDiv.style.filter = 'brightness(100%)'
    })
    // Create div element with class "esentai-foto-text"
    const esentaiFotoTextDiv = document.createElement("div");
    esentaiFotoTextDiv.className = "esentai-foto-text";

    // Create h1 element with text "APM Monaco в Esentai Mall"
    const h1Element = document.createElement("h1");
    h1Element.textContent = i.name;

    // Create button element with class "esentai-foto-text-button"
    const buttonElement = document.createElement("button");
    buttonElement.className = "esentai-foto-text-button";
    // const button = buttonElement.
    const button = document.createElement('onclick');
    button.textContent = "esentai-foto-text"
    button.onclick = function() {
        console.log(i.name)
    }

    // Create ion-icon element with name "arrow-forward-outline" and class "button-icon"
    const ionIconElement = document.createElement("ion-icon");
    ionIconElement.name = "arrow-forward-outline";
    ionIconElement.className = "button-icon";

    // Append ion-icon to the button
    buttonElement.appendChild(ionIconElement);

    // Append h1 and button to the "esentai-foto-text" div
    esentaiFotoTextDiv.appendChild(h1Element);
    esentaiFotoTextDiv.appendChild(buttonElement);

    // Append "esentai-foto-text" div to the "esentai-foto" div
    esentaiFotoDiv.appendChild(esentaiFotoTextDiv);


    // Return the created structure
    return esentaiFotoDiv;
    ////////////////////////////////////////////////
      
}

// let currentIndexes = [0, 1];
let div = document.querySelector('.carousel-imgs')
for(let i = 0; i < products.length; i += 2){
    const card1 = createEsentaiFoto(products[i])
    const card2 = products[i+1] ? createEsentaiFoto(products[i+1]) : null;

    const cardsContainer = document.createElement("div");
    cardsContainer.className = `carousel-img`;
    cardsContainer.appendChild(card1);
    cardPage(card1)
    if (card2) {
        cardsContainer.appendChild(card2);
        cardPage(card2)
    }

    div.appendChild(cardsContainer);
}
// swiper()

function cardPage(card){
    card.addEventListener("click", ()=>{
        window.location.href = `card.html?id=${card.id}`
    })
}
// function swiper(){
//     const prev = document.querySelector(".prev")
//     const next = document.querySelector(".next")
//     const card = document.querySelector(".card")

//     count = 0;
//     next.onclick=() =>{
//         card.style.transform=`translateX(${count-=250}px)`
//     }
//     prev.onclick=() =>{
//         card.style.transform=`translateX(${count+=250}px)`
//     }

//     next.addEventListener("click", nextSlide)

// }

// function nextSlide() {
//     const currentCardsContainer = document.querySelector(`.carousel-cards-container ${currentIndexes[0]}-${currentIndexes[1]}-item`)
//     currentCardsContainer.style.transform=`translateX(${-250}px)`
//     currentCardsContainer.classList.remove("active");

//     currentIndexes[0] = (currentIndexes[0] + 1) % products.length;
//     currentIndexes[1] = (currentIndexes[1] + 1) % products.length;
//     const nextCardsContainer = document.querySelector(`.carousel-cards-container ${currentIndexes[0]}-${currentIndexes[1]}-item`)
//     nextCardsContainer.classList.add("active");
//     nextCardsContainer.style.transform=`translateX(${-250}px)`
// }
// main()

//////////////

// function getPrice(price) {
//     let priceStr = String(price);
//     if (priceStr.length > 4) {
//         const priceSlices = [];
//         for (let i = priceStr.length - 3; i >= 0; i-=3) {
//             priceSlices.unshift(priceStr.slice(i > 0 ? i : 0, i + 3));
//             priceStr = priceStr.slice(0, i);
//         }
//         priceSlices.unshift(priceStr);
//         priceStr = priceSlices.join(" ")
//     }
//     return priceStr;
//   }

///////////////////////////////////
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let imgs = document.querySelectorAll('.carousel-img');
let totalImgs = imgs.length;
let imgPosition = 0;
updatePosition()

// Event Listeners
next.addEventListener('click', nextImg);
prev.addEventListener('click', prevImg);

// Update Position
function updatePosition (){
//   Images
  for(let img of imgs){
    img.classList.remove('visible');
    img.classList.add('hidden');
  }
  imgs[imgPosition].classList.remove('hidden');
  imgs[imgPosition].classList.add('visible')
  console.log(imgs)
}

// Next Img
function nextImg(){
  if (imgPosition === totalImgs - 1){
        imgPosition = 0;
    } else{
        imgPosition++;
    }
    updatePosition();
}
//Previous Image
function prevImg(){
  if (imgPosition === 0){
        imgPosition = totalImgs-1;
    } else{
        imgPosition--;
    }
    updatePosition();
}



/*начало слайдер1 фото 
var i2 = 0;
var b3 = [];

b3[0] = "img/f1.webp";
b3[1] = "img/f2.webp";
b3[2] = "img/f3.webp";
b3[3] = "img/f4.webp";

const b10 = document.querySelector(".left");
b10.addEventListener("click", function () {
  const n = document.querySelector("#slider");
  n.src = b3[i2];
  /* document.slider.src=b3[i2];*//*
  i2--;
  if (i2 < 0) {
    i2 = 2;
  }
});

const b20 = document.querySelector(".rite");
b20.addEventListener("click", function () {
  const n = document.querySelector("#slider");
  n.src = b3[i2];
  /*document.slider.src=b3[i2];*//*
  i2++;
  if (i2 >= b3.length) {
    i2 = 0;
  }
});
/*конец слайдер1 фото */

/*начало слайдер2 фото */
var i3 = 0;
var b4 = [];

b4[0] = "img/f6.webp";
b4[1] = "img/f7.webp";
b4[2] = "img/f8.webp";
b4[3] = "img/f9.webp";
b4[4] = "img/f10.webp";
b4[5] = "img/f11.webp";
b4[6] = "img/f12.webp";
b4[7] = "img/f13.webp";
b4[8] = "img/f14.webp";
b4[9] = "img/f15.webp";

const b11 = document.querySelector(".left1");
b11.addEventListener("click", function () {
  const n = document.querySelector("#slider1");
  n.src = b4[i3];
  /* document.slider.src=b3[i2];*/
  i3--;
  if (i3 < 0) {
    i3 = 2;
  }
});

const b21 = document.querySelector(".rite1");
b21.addEventListener("click", function () {
  const n = document.querySelector("#slider1");
  n.src = b4[i3];
  /*document.slider.src=b3[i2];*/
  i3++;
  if (i3 >= b4.length) {
    i3 = 0;
  }
});
/*конец слайдер2 фото */

/*начало слайдер3 фото */
var i4 = 0;
var b5 = [];

b5[0] = "img/f17.webp";
b5[1] = "img/f18.webp";
b5[2] = "img/f19.webp";
b5[3] = "img/f20.webp";

const b12 = document.querySelector(".left2");
b12.addEventListener("click", function () {
  const n = document.querySelector("#slider1");
  n.src = b5[i4];
  /* document.slider.src=b3[i2];*/
  i4--;
  if (i4 < 0) {
    i4 = 2;
  }
});

const b22 = document.querySelector(".rite2");
b22.addEventListener("click", function () {
  const n = document.querySelector("#slider2");
  n.src = b5[i4];
  /*document.slider.src=b3[i2];*/
  i4++;
  if (i4 >= b5.length) {
    i4 = 0;
  }
});
/*конец слайдер3 фото */










/*початок функції відправки повідомлень в телеграм */
const telega_token = "8269051998:AAFEs9Rt7V_eHvclZjL7uqZ2lNhbtOfMQSI";
const telegs_id = "@paktika1"; //назва групи в якій є бот, якого строюю під даний сайт
const telega_api = `https://api.telegram.org/bot${telega_token}/sendMessage`;

async function send_telega(event) {
  event.preventDefault(); //відміна перезавантаження сторінки 

  const forma = document.querySelector(".form");
  const butom = document.querySelector(".butom");
  const massage_rezalt = document.querySelector(".rezalt");
  //console.log(butom, massage_rezalt)
  massage_rezalt.textContent = "";

  //знаходимо вибрану кнопку по кількості товару
  const kil=document.querySelector('input[type="radio"]:checked')
  //console.log(kil.id)

  

  const formData = new FormData(forma); //збирає всі данні із форми, яка заповнюється користувачем
  const formData2 = Object.fromEntries(formData.entries()); //перетворення зібраних даних в обєкт

  //const {name, tel, golf}=Object.fromEntries(new formData(forma).entries())

  const zayavka = `Заявка от ${formData2.name}!\nтелефон клієнта ${formData2.tel} !\n куди відправити товар ${formData2.golf} !\nкількість товару${kil.id}`;
  console.log(zayavka);
  try {
    const response = await fetch(telega_api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegs_id,
        text: zayavka,
      }),
    });

    //отработка ошибки запроса
    if (response.ok) {
      massage_rezalt.textContent = "Ваш заказ принят, мы скоро с вами свяжемся"; //виведення повідомлення коли відбувся успішний запрос
      forma.reset(); // очистка формы после отправки
    } else {
      throw new Error(response.statusText); //создали текст ошибки
    }
  } catch (error) {
    console.error(error); //виведення помилки яку зафіксували
    massage_rezalt.textContent = "произошла ошибка, подайте заказ ещё раз"; // виведення повідомлення коли запрос не успішний
  }
}
/*початок функції відправки повідомлень в телеграм */







/*функция разворота крестика и отображения текста */
function QW() {
  let a = document.querySelectorAll(".menu-burger2");
  const r = Array.from(a);
  //console.log(r)
  for (let i of r) {
    i.addEventListener("click", function () {
      //this.classList.add('activ')
      // console.log(this)
      this.querySelector(".faq1").classList.add("faq11"); //первая стрелка
      this.querySelector(".faq2").classList.add("faq21"); //вторая стрелка
      let b = this.nextElementSibling;
      //console.log(b);
      let c = b.querySelectorAll("h4");
      b.classList.add("activ");//для блока где таблица в других ситуациях не нужно

      //пошук ячейки для бордеру лінії по середині таблиці
      let c1 = b.querySelectorAll(".table2 td:nth-child(2)");
      const c2 = Array.from(c1);
      //console.log(c2);

      for (let i of c) {
        i.style.opacity = 1;
      }

      //додаємо середню лінію в таблиці
      for (let i of c2) {
        i.classList.add("activ2");
      }

      if (b.style.maxHeight) {
        b.style.maxHeight = null; //нужно в scc для b добавить max-height: 0;
        this.querySelector(".faq1").classList.remove("faq11"); //первая стрелка
        this.querySelector(".faq2").classList.remove("faq21"); //вторая стрелка
        // c.style.opacity=0;

        for (let i of c) {
          i.style.opacity = 0;
        }
        //видаляємо середню лінію в таблиці
        for (let i of c2) {
          i.classList.remove("activ2");
        }
      } 
      else {
        b.style.maxHeight = b.scrollHeight + "px";
      }
    });
  }
}
QW();


// функція плавної прокрутки сторінки до відповідного блоку



/*НАЧАЛО ПЛАВНАЯ ПРОКРУТКА */ 
const yakor=document.querySelectorAll('a[href*="#"]')
/*console.log(yakor)*/

for (let i of yakor){
    i.addEventListener('click', function(event){
       event.preventDefault();
        const n=i.getAttribute('href')
        document.querySelector(''+ n ).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}
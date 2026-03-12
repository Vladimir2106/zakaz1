const text = document.querySelector(".fetch");
const url_api = "https://api.chucknorris.io/jokes/random"; //куда стучимся

async function zaput(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  //перевірка наявності відповіді від сервера
  if (response.ok) {
    text.textContent = data.value;
  } else{
    console.log('error'); //виводимо помилку яку отримали від сервера

  }
}
zaput(url_api);

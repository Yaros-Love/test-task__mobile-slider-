//initiall swiper
const swiper = new Swiper('.swiper-container', {});

const button = document.querySelector(`.swiper-slide__button`);
const textarea = document.querySelector(`.swiper-slide__textarea`);
const userText = document.querySelector(`.swiper-slide__user-text`);
const userList = document.querySelector(`.swiper-slide__list`);

const handlerButtonClick = (evt) => {
  evt.preventDefault();
  const userMessage = textarea.value.split(` `);
  const userLi = document.createElement(`li`);
  userLi.classList.add(`list-item`);

  for(let i = 0; i < userMessage.length; i++) {
      let span = document.createElement(`span`);
      span.textContent = `${userMessage[i]} `;
      span.classList.add(`fade`);
      setTimeout(() => {
        userLi.appendChild(span);
      }, 300 * i);
  };
  userList.appendChild(userLi);
  textarea.value = ``;
};

button.addEventListener(`click`, handlerButtonClick);


const timeContainer = document.querySelector(`.swiper-slide__timer`);

const getCurrentTime = () => {
  const today = new Date();
  const time = (today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()) + ":" + (today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()) + ":" + (today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds());
  timeContainer.innerHTML = time;
};

setInterval(() => getCurrentTime(), 1000);

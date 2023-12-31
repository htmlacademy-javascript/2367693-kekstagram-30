import {getPhotosArray} from './data.js';
//DOM контейнер
const pictureContainer = document.querySelector('.pictures');
//Находим содержимое шаблона
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
//Записываем случайные изображения в переменную
const randomizedPictures = getPhotosArray();
//создаем фрагмент
const pictureFragment = document.createDocumentFragment();

randomizedPictures.forEach(({url, description, likes, comments}) => {
  const pictureTemplateElement = pictureTemplate.cloneNode(true);
  pictureTemplateElement.querySelector('.picture__img').src = url;
  pictureTemplateElement.querySelector('.picture__img').alt = description;
  pictureTemplateElement.querySelector('.picture__likes').textContent = likes;
  pictureTemplateElement.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.appendChild(pictureTemplateElement);
});

const renderPictures = () => pictureContainer.appendChild(pictureFragment);

export {renderPictures};

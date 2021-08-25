$(document).ready(function () {
  var currentFloor = 2; //переменная, где хранится текущий этаж
  var floorPath = $(".home-image path"); // каждый отдельный этаж в SVG
  var counterUp = $(".counter-up"); /* кнопка увеличения этажа*/
  var counterDown = $(".counter-down"); /* кнопка уменьшения этажа*/
  var modal = $(".modal");
  var modalCloseButton = $(".modal-close-button");
  var viewFlatsButton = $(".view-Flats");
  var flatsPath = $(".flats path");
  var flatLink = 1;

  floorPath.on("click", toggleModal)
  modalCloseButton.on("click", toggleModal)
  viewFlatsButton.on("click", toggleModal)

  // функция при наведении мышью на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); // получаем значение текущего этажа 
    $(".counter").text(currentFloor); // записываем значение этажа в счетчик справа
  });




  counterUp.on("click", function () { //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false }); //форматируем переменную с этажом в 01 а не 1
      $(".counter").text(usCurrentFloor);  // записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    } 
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-US", { minimumIntegerDigits: 2, useGroupping: false });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    } 
  });

  
  function toggleModal (){
    modal.toggleClass ("is-open");
    } /* функция открыть-закрыть окно*/
});
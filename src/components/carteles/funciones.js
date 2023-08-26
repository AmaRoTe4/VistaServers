const text_cartel_error = document.querySelector("#text-cartel-error");
const text_cartel_success = document.querySelector("#text-cartel-success");
const toast_top_left_success = document.querySelector(
  "#toast-top-left-success"
);
const toast_top_left_error = document.querySelector("#toast-top-left-error");

const classesFunciones = (elemet, class1, class2) => {
  elemet.classList.remove(class1);
  elemet.classList.add(class2);
};

const Cartel = (element, element_text, text , time) => {
  element_text.textContent = text;
  classesFunciones(element, "hidden", "flex");
  setTimeout(() => {
    classesFunciones(element, "flex", "hidden");
  }, time ?? 2000);
};

export const CartelError = (text , time = 2000) => {
    Cartel(toast_top_left_error , text_cartel_error , text , time)
};

export const CartelSuccess = (text , time = 2000) => {
    Cartel(toast_top_left_success , text_cartel_success , text , time)
};

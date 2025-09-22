const menuItems = document.querySelectorAll(".header__menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    const activeItem = document.querySelector(".header__menu-item.active");
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    item.classList.add("active");
  });
});

//burger
const burgerItem = document.querySelector(".header__burger");
const nav = document.querySelector(".header__menu");
const menuItem = document.querySelectorAll(".header__menu-item");

burgerItem.addEventListener("click", (e) => {
  nav.classList.add("menu-active");
  e.stopPropagation();
});

for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener("click", () => {
    nav.classList.remove("menu-active");
  });
}
document.addEventListener("click", (e) => {
  let target = e.target;
  let its_nav = target == nav || nav.contains(target);
  let its_burger = target == burgerItem;
  let menu_is_active = nav.classList.contains("menu-active");

  if (!its_nav && !its_burger && menu_is_active) {
    nav.classList.remove("menu-active");
  }
});

//range input
const range = document.getElementById("range-input");
const output = document.getElementById("range-value");
output.innerHTML = `${range.value} %`;

range.oninput = function () {
  output.innerHTML = `${this.value} %`;
};

const inputFile = document.querySelector(".input-file input[type=file]");

//input file
inputFile.addEventListener("change", function () {
  const file = this.files[0];
  const customDiv = this.nextElementSibling;
  const customText = customDiv.querySelector(".input-file__custom-text");

  if (file) {
    customText.textContent = file.name;
  } else {
    customText.textContent = "Прикрепить файл";
  }
});

//select

const customSelect = document.querySelector(".custom-select");
const selected = customSelect.querySelector(".custom-select__selected");
const label = customSelect.querySelector(".custom-select__label");
const optionsContainer = customSelect.querySelector(".custom-select__options");
const options = optionsContainer.querySelectorAll(".custom-select__option");

// Открытие/закрытие при клике на селект
selected.addEventListener("click", () => {
  const isOpen = customSelect.classList.contains("open");
  if (isOpen) {
    closeSelect();
  } else {
    openSelect();
  }
});

// Выбор опции
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
    label.textContent = option.textContent;
    selected.dataset.value = option.dataset.value;
    closeSelect();
  });
});

// Закрытие селекта
function closeSelect() {
  customSelect.classList.remove("open");
  customSelect.setAttribute("aria-expanded", "false");
}

// Открытие селекта
function openSelect() {
  customSelect.classList.add("open");
  customSelect.setAttribute("aria-expanded", "true");
}

// Закрытие при клике вне блока
document.addEventListener("click", function (e) {
  if (!customSelect.contains(e.target)) {
    closeSelect();
  }
});

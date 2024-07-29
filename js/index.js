// Получаем элемент аккордеона
const accordion = document.querySelector(".accordion");

// Добавляем обработчик событий для клика по аккордеону
accordion.addEventListener("click", (e) => {
  // Находим ближайшую панель аккордеона от элемента, по которому был совершен клик
  const activePanel = e.target.closest(".accordion-panel");

  // Если панель не найдена, выходим из функции
  if (!activePanel) return;

  // Включаем/выключаем аккордеон для выбранной панели
  toggleAccordion(activePanel);
});

/**
 * Функция для переключения состояния аккордеона
 * @param {Element} panelToActive - панель аккордеона, которая должна быть активирована
 */
function toggleAccordion(panelToActive) {
  // Получаем все кнопки внутри родительского элемента аккордеона
  const buttons = panelToActive.parentElement.querySelectorAll("button");

  // Получаем все содержимое аккордеона внутри родительского элемента аккордеона
  const contents =
    panelToActive.parentElement.querySelectorAll(".accordion-content");

  // Устанавливаем атрибут aria-expanded на false для всех кнопок
  buttons.forEach((button) => {
    button.setAttribute("aria-expanded", false);
  });

  // Устанавливаем атрибут aria-hidden на true для всех содержимых аккордеона
  contents.forEach((content) => {
    content.setAttribute("aria-hidden", true);
  });

  // Устанавливаем атрибут aria-expanded на true для кнопки активной панели
  panelToActive.querySelector("button").setAttribute("aria-expanded", true);

  // Устанавливаем атрибут aria-hidden на false для содержимого активной панели
  panelToActive
    .querySelector(".accordion-content")
    .setAttribute("aria-hidden", false);
}

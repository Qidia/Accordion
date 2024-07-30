document.addEventListener("DOMContentLoaded", function () {
  // Получаем элемент аккордеона
  const accordion = document.querySelector(".accordion");
  let currentPanelIndex = 0;
  let intervalId;

  // Устанавливаем начальное состояние аккордеона
  const panels = accordion.querySelectorAll(".accordion-panel");
  setActivePanel(currentPanelIndex);

  // Добавляем обработчик событий для клика по аккордеону
  accordion.addEventListener("click", (e) => {
    // Находим ближайшую панель аккордеона от элемента, по которому был совершен клик
    const activePanel = e.target.closest(".accordion-panel");

    // Если панель не найдена, выходим из функции
    if (!activePanel) return;

    // Определяем индекс активной панели
    currentPanelIndex = Array.from(panels).indexOf(activePanel);

    // Включаем/выключаем аккордеон для выбранной панели
    setActivePanel(currentPanelIndex);

    // Перезапускаем таймер
    restartTimer();
  });

  // Функция для установки активной панели
  function setActivePanel(index) {
    panels.forEach((panel, i) => {
      const button = panel.querySelector("button");
      const content = panel.querySelector(".accordion-content");

      if (i === index) {
        button.setAttribute("aria-expanded", true);
        content.setAttribute("aria-hidden", false);
      } else {
        button.setAttribute("aria-expanded", false);
        content.setAttribute("aria-hidden", true);
      }
    });
  }

  // Функция для переключения состояния аккордеона
  function toggleAccordion() {
    currentPanelIndex = (currentPanelIndex + 1) % panels.length;
    setActivePanel(currentPanelIndex);
  }

  // Функция для перезапуска таймера
  function restartTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(toggleAccordion, 3000);
  }

  // Устанавливаем интервал для автоматического переключения панелей
  intervalId = setInterval(toggleAccordion, 3000);
});

/**
 * Создание DOM-элемента на основе переданной строки разметки
 * @param {String} string Строка с html разметкой
 * @return {Node}
 */
export const getElementFromString = (string) => {
  const template = document.createElement(`template`);
  template.innerHTML = string.trim();
  return template.content;
};

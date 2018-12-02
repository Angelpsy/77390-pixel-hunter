/**
 * Создание HTML коллекции на основе переданной строки разметки
 * @param {String} string Строка с html разметкой
 * @return {HTMLElement}
 */
export const getNodesFromString = (string) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = string.trim();
  return wrapper;
};

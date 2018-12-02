const ROOT_EL = document.querySelector(`#main`);

/**
 * @param {HTMLElement} node
 */
export const showScreen = (node) => {
  ROOT_EL.innerHTML = ``;
  ROOT_EL.appendChild(node);
};

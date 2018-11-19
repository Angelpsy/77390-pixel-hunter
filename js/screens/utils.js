const ROOT_EL = document.querySelector(`#main`);

/**
 * @param {HTMLCollection} nodes
 */
export const showScreen = (nodes) => {
  ROOT_EL.innerHTML = ``;
  [...nodes].forEach((node) => {
    ROOT_EL.appendChild(node.cloneNode(true));
  });
};

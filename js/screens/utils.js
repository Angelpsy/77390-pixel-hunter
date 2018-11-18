const ROOT_EL = document.querySelector(`#main`);
export const showScreen = (el) => {
  ROOT_EL.innerHTML = ``;
  ROOT_EL.appendChild(el.cloneNode(true));
};

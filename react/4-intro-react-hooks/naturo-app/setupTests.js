import '@testing-library/jest-dom/extend-expect';

window.HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};

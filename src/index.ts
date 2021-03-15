import getMessage from './hello';

function component() {
  const element = document.createElement('div');
  element.innerHTML = `Hello ${getMessage()}.`;
  return element;
}

document.body.appendChild(component());

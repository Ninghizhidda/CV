// Toggle main sections
document.addEventListener('click', event => {
    const element = event.target;
    if (element.className === 'toggle') {
      const sec = element.parentElement.parentElement.querySelectorAll("section");
      sec.forEach(hideFunction);
    }
});

function hideFunction(item) {
  item.classList.toggle('hide');
};

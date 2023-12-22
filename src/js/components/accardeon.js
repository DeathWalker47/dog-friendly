let accardeon = document.querySelectorAll('.accardeon__item');

if(accardeon) {
  accardeon.forEach(el => {
  el.addEventListener('click', (e) => {
    const self = e.currentTarget;
    const content = self.querySelector('.accardeon__content');
    // document.querySelectorAll('.accardeon__item').forEach(el => {
    //   el.classList.remove('accardeon__item--open')
    //   el.querySelector('.accardeon__content').style.maxHeight = null;
    // })

    self.classList.toggle('accardeon__item--open');

    if(self.classList.contains('accardeon__item--open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }

  })
})

}

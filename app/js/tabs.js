function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
  const header = document.querySelectorAll(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  if (header) {
    hideTabContent();
    showTabContent();

    function hideTabContent() {
      content.forEach((item) => {
        item.classList.remove('active');
      });
      tab.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      content[i].classList.add('active');
      tab[i].classList.add(activeClass);
    }

    header.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          const target = e.target;

          if (target.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
              if (target == item || target.parentNode == item) {
                hideTabContent();
                showTabContent(i);
              }
            });
          }
        });
      }
    });
  }
}
someTabs('.news__tabs', '.news__btn', '.news__list', 'news__btn--active');
someTabs(
  '.book-reviews__tabs',
  '.book-reviews__btn',
  '.book-reviews__list',
  'book-reviews__btn--active'
);
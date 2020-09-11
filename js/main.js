
'use strict';
{
  // ヘッダー
  window.addEventListener('scroll', () => {
    let scroll = document.documentElement.scrollTop;
    const headerContainer = document.getElementById('header_container');

    if (scroll > 0 ) {
      headerContainer.classList.add('header_container_opacity');
    } else {
      const headerContainer = document.getElementById('header_container');
      headerContainer.classList.remove('header_container_opacity');
    }
  });



  // ハンバーガメニュー
  const iconHamburger = document.getElementById('hamburger_icon')

  iconHamburger.addEventListener('click', () => {
    const hamburger = document.getElementById('hamburger_menu');
    hamburger.classList.toggle('hamburger_open');

    const header_menu_fadeIn = document.querySelectorAll('#header_menu li');
    
    header_menu_fadeIn.forEach(li => {
      li.classList.toggle('header_menu_fadeIn');
    });

    const hamburger_icon_bar_rotate = document.getElementById('hamburger_icon_bar');
    hamburger_icon_bar_rotate.classList.toggle('hamburger_icon_bar_rotate');
  });

}

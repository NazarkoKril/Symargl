    const header = document.querySelectorAll('.header_component')
    const headerComponent =`    <header>
        <div class="header__container">
            <nav class="header__nav">
                <ul class="header__list left">
                    <li class="active">
                        <a class="header__link" href="/page/catalog.html">Каталог</a>
                        <p class="header_number">
                            (<span id="catalog__number">3</span>)
                        </p>
                    </li>
                    <li>
                        <a class="header__link" href="/page/lookbook.html">Лукбук</a>
                    </li>
                    <li>
                        <a class="header__link" href="/page/about.html">Про нас</a>
                    </li>
                    <li>
                        <a class="header__link" href="/page/faq.html">FAQ</a>
                    </li>
                    <li>
                        <a class="header__link" href="/page/blog.html">Блог</a>
                    </li>
                </ul>
                <button class="burger mob">Меню</button>
                <a href="/" class="header_logo"> <img src="/assets/img/logo_gray.svg" alt="logo"></a>

                <ul class="header__list right">
                    <li>
                        <a class="header__link desk" href="/page/wishlist.html">Вішліст</a>
                    </li>
                    <li>
                        <a class="header__link mobile" href="/page/basket.html">Корзина</a>
                        <p class="header_number">
                            (<span id="basket__number">3</span>)
                        </p>
                    </li>
                    <li>
                        <a class="header__link desk" href="/page/office.html">Кабінет</a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header__mobile_container">
            <div class="header__mobile_list">
                <div class="mobile__item">
                    <h4>Каталог</h4>
                    <ul class="mobile__item_list">
                        <li><a href="/page/catalog.html">Усе</a></li>
                        <li><a href="/page/catalog.html">Светри поло</a></li>
                        <li><a href="/page/catalog.html">Поло</a></li>
                        <li><a href="/page/catalog.html">Светри поло</a></li>
                        <li><a href="/page/catalog.html">Футболки</a></li>
                        <li><a href="/page/catalog.html">Джинси</a></li>
                    </ul>
                </div>
                <div class="header__line"></div>
                 <div class="mobile__item">
                    <h4>Карта сайту</h4>
                    <ul class="mobile__item_list">
                        <li><a href="/page/lookbook.html">Лукбук</a></li>
                        <li><a href="/page/blog.html">Блог</a></li>
                        <li><a href="/page/about.html">Про нас</a></li>
                        <li><a href="/page/wishlist.html">Вішліст</a></li>
                        <li><a href="/page/faq.html">FAQ</a></li>
                        <li><a href="/page/office.html">Кабінет</a></li>
                    </ul>
                </div>
                 <div class="header__line"></div>
                 <div class="mobile__item">
                    <h4>Соцмережі</h4>
                    <ul class="mobile__item_list grid1">
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">TikTok</a></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </header>`
    header.forEach( (el) => {
      return el.innerHTML = headerComponent
    }
    )


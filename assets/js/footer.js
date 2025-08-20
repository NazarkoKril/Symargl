const footer = document.querySelectorAll('.footer_component')
const footerComponent = `<footer class="footer">
        <div class="container__footer">
            <div class="footer__top">
                <img class="logo__footer" src="/assets/img/logo_white.svg" alt="logo">
            </div>

            <div class="footer__main">
                <div class="footer__list">
                    <div class="footer__list_col">
                        <h4>Карта сайту</h4>
                        <ul class="footer_list_link">
                            <li>
                                <a class="footer__link" href="/">Головна</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/page/catalog.html">Каталог</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/page/lookbook.html">Лукбук</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/page/wishlist.html">Вішліст</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/page/basket.html">Корзина</a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__list_col">
                        <h4>Контакти</h4>
                        <ul class="footer_list_link">
                            <li>
                                <a class="footer__link" href="/page/about.html">Про нас</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/page/faq.html">FAQ</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/page/blog.html">Блог</a>
                            </li>

                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__main_img">
                    <img src="/assets/img/footer_image.png" alt="footer owner photo">
                </div>
                <div class="footer__list right">


                    <div class="footer__list_col">
                        <h4>Компанія</h4>
                        <ul class="footer_list_link">
                            <li>
                                <a class="footer__link" href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/">Privacy Policy</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/">Cookie Policy</a>
                            </li>

                        </ul>
                    </div>
                    <div class="footer__list_col">
                        <h4>Компанія</h4>
                        <ul class="footer_list_link">
                            <li>
                                <a class="footer__link" href="/">Instagram</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/">Facebook</a>
                            </li>
                            <li>
                                <a class="footer__link" href="/">TikTok</a>
                            </li>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer__contact">
                <a class="footer__link" href="tel:+380930939898">+380930939898</a>
                <a class="footer__link" href="mailto:symarhl@gmail.com">symarhl@gmail.com</a>
            </div>
            <div class="footer__bottom">
                <p>©2025 Symarhl</p>
                <img src="/assets/img/icons/footer_decor.svg" alt="decoration footer">
                <p>All rights reserved.</p>
            </div>
            <img class="footer__bottom_img-mob" src="/assets/img/icons/footer_decor_mob.svg" alt="decoration footer">
        </div>
    </footer>    `
footer.forEach( (el) => {
  return el.innerHTML = footerComponent
}
)


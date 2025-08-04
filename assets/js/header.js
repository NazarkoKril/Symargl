    const header = document.querySelectorAll('.header_component')
    const headerComponent = ` <header class="header">
            <div class="header-container">
                <div class="header-info">
                    <div class="header-left">
                        <a href="/" class="logo">
                            <img src="/assets/img/logo36.svg" alt="logo">
                        </a>
                        <div class="header-line"></div>
                        <nav>
                            <ul class="header-list">
                                <li class="header-item services-link"><a href="/page/service.html" class="header-link text-body-medium">Services</a></li>
                                <li class="header-item"><a href="/page/portfolio.html" class="header-link text-body-medium">Portfolio</a></li>
                                <li class="header-item"><a href="/page/about.html" class="header-link text-body-medium">About</a></li>
                                <li class="header-item"><a href="/page/contact.html" class="header-link text-body-medium">Contact</a></li>
                                <li class="header-item"><a href="/page/blog.html" class="header-link text-body-medium">Blog</a></li>
                            </ul>
                            <div class="header-line"></div>
                            <div class="header-item count">
                                <button class="header-link text-body-medium cart-btn">
                                    Cart <span class="header-cart-count">(99)</span>
                                </button>
                            </div>
                        </nav>
                    </div>
                    <div class="header-right">
                        <a href="/page/form.html" class="black-btn text-label-medium">Contact</a>
                        <div class="burger-icon">
                            <div class="line1"></div>
                            <div class="line2"></div>
                            <div class="line3"></div>
                        </div>
                    </div>
                </div>
                <div class="burger-menu">
                    <div class="burger-container">
                        <ul class="header-list">
                            <li class="header-item services-link-burger"><a href="/page/service.html" class="header-link text-body-medium">Services</a>
                                <svg id="dropdown-btn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_193_13803" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_193_13803)">
                                    <path d="M11.9999 15.0538L6.34619 9.4L7.39994 8.34625L11.9999 12.9463L16.5999 8.34625L17.6537 9.4L11.9999 15.0538Z" fill="#101010"/>
                                    </g>
                                </svg>
                            </li>
                            <li class="header-item"><a href="/page/portfolio.html" class="header-link text-body-medium">Portfolio</a></li>
                            <li class="header-item"><a href="/page/about.html" class="header-link text-body-medium">About</a></li>
                            <li class="header-item"><a href="/page/contact.html" class="header-link text-body-medium">Contact</a></li>
                            <li class="header-item"><a href="/page/blog.html" class="header-link text-body-medium">Blog</a></li>
                        </ul>
                        <div class="header-line"></div>
                        <div class="header-item count">
                            <button class="header-link text-body-medium cart-btn">
                                Cart <span class="header-cart-count">(99)</span>
                            </button>
                        </div>
                    </div>        
                </div>
            </div>
    
            <div class="header-dropdown">
                <div class="header-dropdown-container">
                    <a href="/page/servicePage.html" class="header-dropdown-item">
                        <div class="header-dropdown-item-photo">
    
                            <img src="/assets/img/service1.png" alt="service1">
    
                        </div>
                        <div class="header-dropdown-item-info">
                            <p>Screen printing</p>
                            <button class="stroke-b-btn">
                                <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.627 12.75H4.5V11.25H16.627L10.9308 5.55375L12 4.5L19.5 12L12 19.5L10.9308 18.4462L16.627 12.75Z" fill="#101010"/>
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="/page/servicePage.html" class="header-dropdown-item">
                        <div class="header-dropdown-item-photo">
    
                            <img src="/assets/img/service1.png" alt="service1">
    
                        </div>
                        <div class="header-dropdown-item-info">
                            <p>Screen printing</p>
                            <button class="stroke-b-btn">
                                <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.627 12.75H4.5V11.25H16.627L10.9308 5.55375L12 4.5L19.5 12L12 19.5L10.9308 18.4462L16.627 12.75Z" fill="#101010"/>
                                </svg>
                            </button>
                        </div>
                    </a>
                    <a href="/page/servicePage.html" class="header-dropdown-item">
                        <div class="header-dropdown-item-photo">
    
                            <img src="/assets/img/service1.png" alt="service1">
    
                        </div>
                        <div class="header-dropdown-item-info">
                            <p>Screen printing</p>
                            <button class="stroke-b-btn">
                                <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.627 12.75H4.5V11.25H16.627L10.9308 5.55375L12 4.5L19.5 12L12 19.5L10.9308 18.4462L16.627 12.75Z" fill="#101010"/>
                                </svg>
                            </button>
                        </div>
                    </a>
                </div>
            </div>
            
            <div class="basket">
                <div class="basket-container">
                    <h4 class="text-title-large">Cart</h4>
                    <div class="basket-list">
                        <div class="cart-item">
                            <div class="cart-item-photo">

                            </div>
                            <div class="cart-item-info">
                                <p class="text-label-large cart-item-info-title">Bella & Canvas Samples</p>
                                <p class="text-label-medium sku">Sku:</p>
                                <p class="text-body-medium">N/A</p>
                                <div class="quantity-controls">
                                    <button class="gray-btn minus">
                                        <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 12.75V11.25H18.5V12.75H5.5Z" fill="#101010"/>
                                        </svg>                                      
                                    </button>
                                    <p class="quantity">1</p>
                                    <button class="gray-btn plus">
                                        <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.25 20.5V12.75H3.5V11.25H11.25V3.5H12.75V11.25H20.5V12.75H12.75V20.5H11.25Z" fill="#101010"/>
                                          </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="cart-item-right">
                                <button class="gray-btn delete-item">
                                    <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_193_13819" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_193_13819)">
                                        <path d="M6.39994 18.6538L5.34619 17.6L10.9462 12L5.34619 6.4L6.39994 5.34625L11.9999 10.9463L17.5999 5.34625L18.6537 6.4L13.0537 12L18.6537 17.6L17.5999 18.6538L11.9999 13.0538L6.39994 18.6538Z" fill="#101010"/>
                                        </g>
                                    </svg>
                                </button>
                                <p class="text-title-medium">$62.00</p>
                            </div>
                        </div>
                        <div class="cart-item">
                            <div class="cart-item-photo">

                            </div>
                            <div class="cart-item-info">
                                <p class="text-label-large cart-item-info-title">Bella & Canvas Samples</p>
                                <p class="text-label-medium sku">Sku:</p>
                                <p class="text-body-medium">N/A</p>
                                <div class="quantity-controls">
                                    <button class="gray-btn minus">
                                        <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.5 12.75V11.25H18.5V12.75H5.5Z" fill="#101010"/>
                                        </svg>                                      
                                    </button>
                                    <p class="quantity">1</p>
                                    <button class="gray-btn plus">
                                        <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.25 20.5V12.75H3.5V11.25H11.25V3.5H12.75V11.25H20.5V12.75H12.75V20.5H11.25Z" fill="#101010"/>
                                          </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="cart-item-right">
                                <button class="gray-btn delete-item">
                                    <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_193_13819" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_193_13819)">
                                        <path d="M6.39994 18.6538L5.34619 17.6L10.9462 12L5.34619 6.4L6.39994 5.34625L11.9999 10.9463L17.5999 5.34625L18.6537 6.4L13.0537 12L18.6537 17.6L17.5999 18.6538L11.9999 13.0538L6.39994 18.6538Z" fill="#101010"/>
                                        </g>
                                    </svg>
                                </button>
                                <p class="text-title-medium">$62.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="basket-bottom">
                        <div class="basket-totals">
                            <div class="basket-totals-subtotal">
                                <p class="text-body-large">Subtotal:</p>
                                <p class="text-body-large">$11500.00</p>
                            </div>
                            <div class="basket-totals-total">
                                <p class="text-title-medium">Total:</p>
                                <p class="text-title-medium">$124.00</p>
                            </div>
                        </div>
                        <div class="buttons2">
                            <button class="stroke-b-btn" id="close-cart">Add more</button>
                            <a href="/page/cart.html" class="black-btn" id="to-cart-btn">Place to order</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overlay"></div>
        </header>
    `
    header.forEach( (el) => {
      return el.innerHTML = headerComponent
    }
    )


const footer = document.querySelectorAll('.footer_component')
const footerComponent = `<footer class="footer">
        <div class="footer-container">
            <div class="footer-top">
                <div class="left">
                    <a href="/" class="logo">
                        <img src="/assets/img/logo36.svg" alt="logo">
                    </a>
                    <div class="footer-address">
                        <p class="text-body-medium">Los Angeles, 11213</p>
                        <p class="text-body-medium">Los Angeles, 11213</p>
                        <p class="text-body-medium">Los Angeles, 11213</p>
                    </div>
                    <h6 class="text-title-small">Follow Us</h6>
                    <div class="footer-social">
                        <a href="#" class="stroke-g-btn">
                            <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.02911 21H3.29732V8.98232H7.02911V21ZM5.16121 7.343C3.9679 7.343 3 6.35458 3 5.16125C3 4.58805 3.2277 4.03833 3.633 3.63302C4.03831 3.2277 4.58802 3 5.16121 3C5.73439 3 6.2841 3.2277 6.68941 3.63302C7.09471 4.03833 7.32241 4.58805 7.32241 5.16125C7.32241 6.35458 6.35411 7.343 5.16121 7.343ZM20.996 21H17.2722V15.1499C17.2722 13.7556 17.2441 11.9677 15.332 11.9677C13.3918 11.9677 13.0945 13.4824 13.0945 15.0494V21H9.3667V8.98232H12.9458V10.6216H12.998C13.4963 9.67743 14.7133 8.68097 16.5289 8.68097C20.3057 8.68097 21 11.1681 21 14.3985V21H20.996Z" fill="#101010"/>
                            </svg>                                
                        </a>
                        <a href="#" class="stroke-g-btn">
                            <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8186 3H8.16857C5.31429 3 3 5.31429 3 8.16857V15.8186C3 18.6857 5.31429 21 8.16857 21H15.8186C18.6729 21 21 18.6857 21 15.8186V8.16857C21 5.31429 18.6729 3 15.8186 3ZM12 16.5C9.51857 16.5 7.5 14.4814 7.5 12C7.5 9.51857 9.51857 7.5 12 7.5C14.4814 7.5 16.5 9.51857 16.5 12C16.5 14.4814 14.4814 16.5 12 16.5ZM12 8.78571C10.2257 8.78571 8.78571 10.2257 8.78571 12C8.78571 13.7743 10.2257 15.2143 12 15.2143C13.7743 15.2143 15.2143 13.7743 15.2143 12C15.2143 10.2257 13.7614 8.78571 12 8.78571Z" fill="#101010"/>
                            </svg>
                        </a>
                        <a href="#" class="stroke-g-btn">
                            <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.5 12.0574C21.5 6.81113 17.2463 2.55743 12 2.55743C6.75369 2.55743 2.5 6.81113 2.5 12.0574C2.5 16.7988 5.97349 20.7291 10.5157 21.4425V14.8042H8.10301V12.0574H10.5157V9.96399C10.5157 7.58331 11.9345 6.26739 14.1041 6.26739C15.1435 6.26739 16.231 6.45309 16.231 6.45309V8.79102H15.0326C13.853 8.79102 13.4843 9.52312 13.4843 10.2753V12.0574H16.1188L15.6979 14.8042H13.4843V21.4425C18.0265 20.7305 21.5 16.8001 21.5 12.0574Z" fill="#101010"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="right">
                    <div class="footer-links">
                        <div class="footer-links-item">
                            <h6 class="text-title-small">Services</h6>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                        </div>
                        <div class="footer-links-item">
                            <h6 class="text-title-small">Portfolio</h6>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                        </div>
                        <div class="footer-links-item">
                            <h6 class="text-title-small">About us</h6>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                        </div>
                        <div class="footer-links-item">
                            <h6 class="text-title-small">Contacts</h6>
                            <a href="#" class="text-label-medium">Button</a>
                            <a href="#" class="text-label-medium">Button</a>
                        </div>
                    </div>
                    <div class="footer-info">
                        <div class="left">
                            <h6 class="text-title-small">7 Days a Week</h6>
                            <p class="text-body-medium">Monday-Friday: 8am - Midnight ET</p>
                            <p class="text-body-medium">Saturday: 10am - 6pm ET</p>
                            <p class="text-body-medium">Sunday: 10am - 6pm ET</p>
                        </div>
                        <div class="right">
                            <h6 class="text-title-small">Contact us</h6>
                            <a href="#" class="text-label-medium">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_193_13887" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_193_13887)">
                                    <path d="M19.4402 20.5C17.5557 20.5 15.6625 20.0618 13.7605 19.1855C11.8587 18.3092 10.1113 17.073 8.51825 15.477C6.92542 13.8808 5.69083 12.1333 4.8145 10.2345C3.93817 8.33583 3.5 6.44425 3.5 4.55975C3.5 4.25692 3.6 4.00458 3.8 3.80275C4 3.60092 4.25 3.5 4.55 3.5H7.8115C8.064 3.5 8.28675 3.58242 8.47975 3.74725C8.67275 3.91192 8.7955 4.11542 8.848 4.35775L9.42125 7.3C9.46092 7.573 9.45258 7.80758 9.39625 8.00375C9.33975 8.19992 9.23842 8.36467 9.09225 8.498L6.78275 10.7462C7.15442 11.4269 7.57908 12.0708 8.05675 12.678C8.53425 13.285 9.05125 13.8648 9.60775 14.4173C10.1564 14.9661 10.7397 15.4757 11.3577 15.9462C11.9757 16.4167 12.6431 16.8546 13.3598 17.2598L15.6038 14.9963C15.7603 14.8334 15.9498 14.7193 16.1723 14.6538C16.3946 14.5884 16.6257 14.5724 16.8655 14.6058L19.6423 15.1713C19.8948 15.2379 20.1008 15.3667 20.2605 15.5577C20.4202 15.7487 20.5 15.9654 20.5 16.2078V19.45C20.5 19.75 20.3991 20 20.1973 20.2C19.9954 20.4 19.7431 20.5 19.4402 20.5ZM6.073 9.327L7.85775 7.61925C7.88975 7.59358 7.91058 7.55833 7.92025 7.5135C7.92992 7.46867 7.92833 7.427 7.9155 7.3885L7.48075 5.15375C7.46792 5.10258 7.4455 5.06417 7.4135 5.0385C7.3815 5.01283 7.33983 5 7.2885 5H5.15C5.1115 5 5.07942 5.01283 5.05375 5.0385C5.02825 5.06417 5.0155 5.09625 5.0155 5.13475C5.06667 5.81808 5.1785 6.51225 5.351 7.21725C5.52333 7.92242 5.764 8.62567 6.073 9.327ZM14.773 17.9693C15.4358 18.2783 16.1272 18.5145 16.847 18.678C17.567 18.8413 18.2397 18.9384 18.8652 18.9693C18.9037 18.9693 18.9358 18.9564 18.9615 18.9307C18.9872 18.9051 19 18.873 19 18.8345V16.7308C19 16.6794 18.9872 16.6377 18.9615 16.6058C18.9358 16.5738 18.8974 16.5513 18.8462 16.5385L16.7462 16.1115C16.7077 16.0987 16.6741 16.0971 16.6453 16.1067C16.6164 16.1164 16.5859 16.1372 16.5538 16.1692L14.773 17.9693Z" fill="currentColor"/>
                                    </g>
                                </svg>
                                898-234-2342
                            </a>
                            <a href="#" class="text-label-medium">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_193_13946" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_193_13946)">
                                    <path d="M4.30775 19.5C3.80258 19.5 3.375 19.325 3.025 18.975C2.675 18.625 2.5 18.1974 2.5 17.6923V6.30775C2.5 5.80258 2.675 5.375 3.025 5.025C3.375 4.675 3.80258 4.5 4.30775 4.5H19.6923C20.1974 4.5 20.625 4.675 20.975 5.025C21.325 5.375 21.5 5.80258 21.5 6.30775V17.6923C21.5 18.1974 21.325 18.625 20.975 18.975C20.625 19.325 20.1974 19.5 19.6923 19.5H4.30775ZM20 7.44225L12.4865 12.252C12.4097 12.2955 12.3302 12.3298 12.248 12.3548C12.166 12.3798 12.0833 12.3923 12 12.3923C11.9167 12.3923 11.834 12.3798 11.752 12.3548C11.6698 12.3298 11.5903 12.2955 11.5135 12.252L4 7.44225V17.6923C4 17.7821 4.02883 17.8558 4.0865 17.9135C4.14417 17.9712 4.21792 18 4.30775 18H19.6923C19.7821 18 19.8558 17.9712 19.9135 17.9135C19.9712 17.8558 20 17.7821 20 17.6923V7.44225ZM12 11L19.8463 6H4.15375L12 11ZM4 7.673V6.52975V6.5595V6.52775V7.673Z" fill="currentColor"/>
                                    </g>
                                </svg>
                                Send us an Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p class="text-body-small">© 2025 The Embroidery Shop DTLA. All rights reserved.</p>
                <div class="footer-privacy">
                    <a href="#" class="text-label-small">Privacy Policy</a>
                    <a href="#" class="text-label-small">Privacy Policy</a>
                    <a href="#" class="text-label-small">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
    `
footer.forEach( (el) => {
  return el.innerHTML = footerComponent
}
)


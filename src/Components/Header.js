import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header class="container-fluid topbar px-5 d-none d-lg-block">
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-flex flex-wrap">
                            <a href="#" className="text-white small me-4"><i className="fas fa-map-marker-alt text-white me-2"></i>Find A Location</a>
                            <a href="tel:+918000489090" className="text-white small me-4"><i className="fas fa-phone-alt text-white me-2"></i>+918000489090</a>
                            <a href="mailto:example@gmail.com" className="text-white small me-0"><i className="fas fa-envelope text-white me-2"></i>info@vkstockvission.com</a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
                            <div className="dropdown">
                                <p>SEBI RESEARCH ANALYST : INH000019831</p>
                              
                            </div>
                        </div>
                    </div>
                </div>
              
            </header>
        );
    }
}

export default Header;
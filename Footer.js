import React from 'react'
import styled from 'styled-components'

 function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
            <div className="container">
                <div className="row">
                    { /*column1  */ }
                    <div className="col-md-3 col col-sm-6">
                        <h4>Fake Company, LLC</h4>
                            <ul className="list-unstyled">
                                <li>Denver, Colorado</li>
                                <li>123 Fake Street</li>
                                <li>hello@fakecompany.io</li>
                                <li>303.555.5555</li>
                            </ul>
                    </div>
                    { /*column2  */ }
                    <div className="col-md-3 col col-sm-6">
                        <h4>Lorem, ipsum.</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">lorem</a></li>
                                <li><a href="/">lorem</a></li>
                                <li><a href="/">lorem</a></li>
                                <li><a href="/">lorem</a></li>
                            </ul>
                    </div>
                    { /*column3  */ }
                    <div className="col-md-3 col col-sm-6">
                        <h4>Lorem, ipsum.</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">lorem</a></li>
                                <li><a href="/">lorem</a></li>
                                <li><a href="/">lorem</a></li>
                                <li><a href="/">lorem</a></li>
                            </ul>
                    </div>
                    { /*column4  */ }
                    <div className="col-md-3 col col-sm-6">
                        <h4>Lorem, ipsum.</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">lorem</a></li>
                                <li><a href="/">lorem</a></li>
                                <li><a href="/">lorem</a></li>
                                <li><a href="/">lorem</a></li>
                            </ul>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} Fake Company - All Rights Reserved
                    </p>
                </div>
            </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: .5rem;
    color: var(--mainWhite);
}

.footer-bottom {
   padding-middle: .5rem;
   padding-bottom: .5rem; 
}

ul li a {
   color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey);
}
`;
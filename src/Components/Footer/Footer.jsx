import React from 'react'
import '../../Css/Footer.css'
const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="top-footer"></div>
            <div className="bottom-footer">
                <div className="b-f-cmp">
                    <h3 className="Contact-Us">
                        Contact Us
                    </h3>
                    <div className="b-f-opt">
                        <ul className="b-f-ul">
                            <li className="b-f-li">Contact Us</li>
                            <li className="b-f-li">About Us</li>
                        </ul>
                    </div>
                </div>
                <div className="b-f-cmp">
                    <h3 className="Contact-Us">
                        Policy
                    </h3>
                    <div className="b-f-opt">
                        <ul className="b-f-ul">
                            <li className="b-f-li">Privatcy Policy</li>
                            <li className="b-f-li">Delivary Policy</li>
                            <li className="b-f-li">Return Policy</li>
                            <li className="b-f-li">Payments</li>
                        </ul>
                    </div>
                </div>
                <div className="b-f-cmp">
                    <h3 className="Contact-Us">
                        Connect With US
                    </h3>
                    <div className="b-f-opt">
                        <ul className="b-f-ul">
                            <li className="b-f-li">Contact Us</li>
                            <li className="b-f-li">Become A Saller</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="ft-rites">
                <h1 className="copy">
                    &copy; AllRightesReserved @AjjuShops
                </h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer
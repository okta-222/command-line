import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="header-overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>July 22 - 26 in San Francisco, CA</h2>
                            <p>Web Design Conference</p>
                            <form>
                                <button type="submit" className="left">Learn More</button>
                                <button type="submit" className="right">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;




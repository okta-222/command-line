import React from "react";
import "./Services.css";
import online from "../../assets/over.jpg"

const Services = () => {
    return (
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h4>New Event is a fully responsive one-page template for events<br /> conferences or workshops.</h4>
                        <h6>This is a Bootstrap v3.3.6 layout that is responsive and mobile friendly. You may download
                            and modify this template for your website. Please tell your friends about templatemo.</h6>
                        <h6>Quisque facilisis scelerisque venenatis. Nam vulputate ultricies luctus. Lorem ipsum dolor
                            sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</h6>

                    </div>
                    <div className="col-md-6">
                        <img src={online} title="hi" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services;
import React from "react";
import outline from "../../assets/planet.jpg"
import "./Video.css"

const video = () => {
    return (
        <section className="video">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h4>WATCH VIDEO</h4>
                        <p>Quisque ut libero sapien. Integer tellus nisl, efficitur sed dolor at, <br />
                            vehicula finibus massa. Sed tincidunt metus sed eleifend suscipit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <br />
                            euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. <br />
                            Lorem ipsum dolor sit amet consectetuer diam nonummy.</p>
                    </div>
                    <div className="col-md-6">
                        <img src={outline} title="bye" />
                    </div>

                </div>
            </div>
        </section>

    )
}

export default video;
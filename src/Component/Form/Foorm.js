import React from "react";
import { Form } from "react-bootstrap";
import "./Foorm.css"


const Register = () => {
    return (
        <section className="form">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h2>Register <span className="span">Here</span></h2>
                        <h3>Nunc eu nibh vel augue mollis tincidunt id efficitur tortor. Sed pulvinar<br />
                            est sit amet tellus iaculis hendrerit.</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh <br />
                            euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. <br />
                            Lorem ipsum dolor sit amet consectetuer diam nonummy.</p>
                    </div>
                    <div className="col-md-6">
                        <Form>
                            <input placeholder="first name"></input>
                            <input placeholder="last name"></input>
                            <input placeholder="phone number"></input>
                            <input placeholder="email address"></input>
                            <button>Register</button>
                        </Form>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Register;
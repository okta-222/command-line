import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h3>New<span className='span'>Event</span></h3>
                        <p>Proin sodales convallis urna eu condimentum. Morbi tincidunt<br /> augue eros,
                            vitae pretium mi condimentum eget. Suspendisse<br /> eu turpis sed elit pretium congue.</p>
                        <p>Mauris at tincidunt felis, vitae aliquam magna. Sed aliquam <br />fringilla vestibulum.
                            Praesent ullamcorper mauris fermentum <br />turpis scelerisque rutrum eget eget turpis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br />
                            diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna<br />
                            aliquam erat volutpat. Lorem ipsum</p>
                        <button className='one'>Download Now</button>
                    </div>
                    <div className="col-md-6">
                        <div className="form">
                            <h2>Keep In <span className='span'>Touch</span></h2>
                            <input type="text" name="user" id="user" placeholder='name' />
                            <input type="text" name="" id="mail" placeholder='email' />
                            <input type="text" name="" id="" placeholder='message' />
                            <button className='two'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact;

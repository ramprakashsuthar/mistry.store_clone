import React from 'react'

export default function ContactUs() {
    return (
    <>
            <section className="community-section partner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="text-center">
                                <h1 className="color-cms fs-35">Got Questions?</h1>
                                <h2 className="fs-14 color-primary fw-normal">Fill in the details and we'll get in touch with you
                                    shortly!</h2>
                                <div className="mt-5 pt-lg-5 mb-5 mb-md-0">
                                    <img src="https://mistry.store/images/contact-banner.png"
                                        alt="contact-banner" className="img-fluid"/>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <form className="partner-form">
                                <div className="mb-4">
                                    <h3 className="color-light fs-14 fw-500">I Want To <span className="color-primary">*</span>
                                    </h3>
                                    <div className="d-md-flex flex-wrap justify-content-between">
                                        <div className="radio-item mb-3">
                                            <input type="radio" id="optionid1" name="contact-radio"
                                                value="SUPPLIER" checked=""/>
                                                <label for="optionid1">Join Our Supplier
                                                    Base</label>
                                        </div>
                                        <div className="radio-item mb-3">
                                            <input type="radio" id="optionid2" name="contact-radio"
                                                value="PARTNER"/>
                                                <label for="optionid2">Become a Partner</label>
                                        </div>
                                        <div className="radio-item mb-3">
                                            <input type="radio" id="optionid3" name="contact-radio"
                                                value="QUERY"/>
                                                <label for="optionid3">Other Queries</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="border-bottom input-label">
                                        <input type="text"
                                            className="form-control border-0 shadow-none text-dark rounded-0 ps-1" placeholder=" "
                                            id="name" value=""/>
                                            <label for="name" className="color-light">Name</label>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="border-bottom input-label">
                                        <input type="number"
                                            className="form-control border-0 shadow-none text-dark rounded-0 ps-1" placeholder=" "
                                            id="phone" maxlength="10" value=""/>
                                            <label for="phone"
                                                className="color-light">Phone</label>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <div className="border-bottom input-label">
                                        <input type="text"
                                            className="form-control border-0 shadow-none text-dark rounded-0 ps-1" placeholder=" "
                                            id="email" value=""/>
                                            <label for="email" className="color-light">Email Address</label>
                                    </div>
                                </div>
                                <div className="mb-5 form-floating">
                                    <textarea
                                        className="form-control shadow-none border text-dark resize-none" placeholder=" "
                                        id="message">
                                    </textarea>
                                    <label for="message" className="color-light">Message</label>
                                </div>
                                <button className="primary-button outline-none" type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact mb-5 pb-5 mt-5 mt-lg-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-6">
                            <div className="text-center">
                                <img src="https://mistry.store/images/contact-mystry-icon.png" alt="mystry-icon"
                                    className="img-fluid"/>
                                    <p className="color-light mb-2">Thank you for reaching out to us! We would love to address your
                                        queries.</p>
                                    <p className="color-light"> You can reach out to us at:</p>
                                    <div>
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt"
                                            className="svg-inline--fa fa-mobile-alt fa-w-10 color-light me-2" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="10">
                                            <path fill="currentColor"
                                                d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z">
                                            </path>
                                        </svg>
                                        <a className="color-primary text-decoration-none" href="tel: +918070880707">+91 80708
                                            80707</a>
                                    </div>
                                    <div>
                                        <span className="color-light mb-0 fs-14"> For Sales:</span>
                                        <svg aria-hidden="true"
                                            focusable="false" data-prefix="fas" data-icon="envelope"
                                            className="svg-inline--fa fa-envelope fa-w-16 color-light mx-2" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10">
                                            <path fill="currentColor"
                                                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                            </path>
                                        </svg>
                                        <a href="mailto:sales@mistry.store"
                                            className="color-primary text-decoration-none">sales@mistry.store</a>
                                    </div>
                                    <div>
                                        <span className="color-light mb-0 fs-14"> For Marketing:</span>
                                        <svg aria-hidden="true"
                                            focusable="false" data-prefix="fas" data-icon="envelope"
                                            className="svg-inline--fa fa-envelope fa-w-16 color-light mx-2" role="img"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="10">
                                            <path fill="currentColor"
                                                d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                            </path>
                                        </svg>
                                        <a href="mailto:marketing@mistry.store"
                                            className="color-primary text-decoration-none">marketing@mistry.store</a>
                                    </div>
                                    <h2 className="color-cms fs-24 py-4 border-bottom">Plot No. 24, <br/> CRPF Road Sector 61 <br/>
                                        Gurugram - 122011</h2>
                                    </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6">
                                        <div className="ms-auto mt-4 mt-lg-0">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14037.160756565965!2d77.09178!3d28.4104994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdeb9e9378460ef5a!2smistry.store!5e0!3m2!1sen!2sin!4v1670156576911!5m2!1sen!2sin"
                                                frameborder="0" className="w-100" allowfullscreen="">
                                            </iframe>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>
                </>
                )
}

// Contact Page Main Component
import FeaturesSection from "../featuresection";
import ContactBanner from "./contactbanner";
const ContactPage = () => (
    <main>
        <ContactBanner />
        <div className="section-padding container">
            <div className="contact-page-content">
                <div className="contact-section-header">
                    <h2>Get In Touch With Us</h2>
                    <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                </div>
                <div className="contact-section-body">
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <span>📍</span>
                            <div>
                                <h4>Address</h4>
                                <p>236 5th SE Avenue, New York NY10001, United States</p>
                            </div>
                        </div>
                        <div className="contact-info-item">
                            <span>📞</span>
                            <div>
                                <h4>Phone</h4>
                                <p>Mobile: +(84) 546-6789 <br/> Hotline: +(84) 456-6789</p>
                            </div>
                        </div>
                         <div className="contact-info-item">
                            <span>🕒</span>
                            <div>
                                <h4>Working Time</h4>
                                <p>Monday-Friday: 9:00 - 22:00 <br/> Saturday-Sunday: 9:00 - 21:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Your name</label>
                                <input type="text" id="name" placeholder="Abc" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" id="email" placeholder="Abc@def.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="This is an optional" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" placeholder="Hi! i’d like to ask about"></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <FeaturesSection />
    </main>
);
export default ContactPage ;    
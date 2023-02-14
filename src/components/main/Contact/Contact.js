import "./Contact.scss";
import clock from "../../../images/contact/clock.png";
import line from "../../../images/contact/vertical-line.png";
import email from "../../../images/contact/email.png";
import location from "../../../images/contact/location-pin.png";

const Contact = () => {
  return (
    <div className="contact-sec">
      <section className="contact-sec1">
        <div className="schedule-sec">
          <img className="contact-icons" src={clock} alt="clock" />
          <p className="schedule-info">Tuesday - sunday: 8 a.m. - 9 p.m.</p>
        </div>
        <img className="line-icon" src={line} alt="line" />
        <div className="email-sec">
          <img className="contact-icons" src={email} alt="letter" />
          <p className="email-info">two-shots@gmail.com</p>
        </div>
        <img className="line-icon" src={line} alt="line" />
        <div className="location-sec">
          <img className="contact-icons" src={location} alt="location" />
          <p className="location-info">Av. San Martin 1083, Barranco</p>
        </div>
      </section>
      <section className="contact-sec2">
        <p className="text-sec2">
          If you have a question or any message, we'll be glad to hear from you.
        </p>
        <form>
          <div className="mb-3 d-flex">
            <input
              className="form-control margin-name"
              type="text"
              placeholder="Your name"
            />
            <input
              className="form-control"
              type="email"
              id="exampleFormControlInput1"
              placeholder="Your email"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="col-auto d-flex justify-content-center">
            <button className="btn btn-outline-success w-25 mb-3" type="submit">
              Send
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;

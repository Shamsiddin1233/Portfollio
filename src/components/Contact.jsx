import "./Contact.css"
import img3 from "../assets/img3.png"
function  Contact() {
    return(
        <div className="Contact" id="Contact">
            <h1>Contact</h1>
            <div className="Contact-inputs">
                <p>If you have any questions, please do not hesitate to contact me. I am open to any job opportunities that match my skills and interests.</p>
                <h3>Your Name:</h3>
                <input type="text" />
                <h3>Your Email:</h3>
                <input type="email" />
                <h3>Your Message:</h3>
                <textarea></textarea> <br />
                <button>Send Message</button>
            </div>
            <div className="Contacts">
                <h2>shamsiddin@gmail.com</h2>
                <h2>+998 (90) 694-12-84</h2>
                <h2>Uzb,Namangan</h2>
                <a href="https://github.com/Shamsiddin1233?tab=repositories" target="blank"><img src={img3} alt="" /></a>
            </div>
        </div>
    )
}
export default Contact
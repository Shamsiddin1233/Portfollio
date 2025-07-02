import "./Aboute.css"
import img7 from "../assets/img7.png"
function Aboute (){
    return(
        <div className="AbouteB" id="Aboute">
            <div className="LevlB">
                <h1>Aboute</h1>
            </div>
        <div className="Aboute">

            <div className="Aboute-text">
                    <h2>Who I am?</h2>
                    <p>My name is Shamasiddin, I am a web developer, currently <br />  studying in the 2nd month of react, I have completed <br />  html, css, javascript,  my teacher is Hamidullo,  <br /> I was born in 2010,  I am currently studying in the 8th <br /> grade of the 7th school in Uzbekistan. <br />Thank you for visiting my Portfolio
                    </p>
            </div>
            <div className="Aboute-img">
            <img src={img7} alt="" />
            </div>
        </div>
        </div>
    )
}
export default Aboute
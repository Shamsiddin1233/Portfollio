import "./Home.css"
import img1 from "../assets/img1.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import Navbar from "./Navbar"

function Home() {
    return(
        <div className="Bg-Home">
            <Navbar/>
        <div className="Home" id="Home">
            <div className="Home-text"> 
                <h1>
                    Hello,
                    This is  <br /> <span className="name">Shamsiddin</span>, I am a <br />
                    <span className="deve"> web developer</span></h1>
                <div className="icons"> 

           
                <a href="https://github.com/Shamsiddin1233?tab=repositories" target="blank"> <img className="img2" src={img3} alt="" /></a>
                <img className="img1" src={img4} alt="" />
            <img className="img1" src={img5} alt="" />
            <img className="img3" src={img6} alt="" />

                </div>

            </div>
                <div className="boy"> 
                    <img src={img1} alt="" />
                </div>
        </div>
        </div>
    )
}
export default Home
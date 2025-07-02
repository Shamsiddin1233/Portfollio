import "./Scills.css";
import img8  from "../assets/img8.png"
import img9  from "../assets/img9.png"
import img10  from "../assets/img10.png"
function Scills() {
  return (
    <div className="LevlB" id="Scills">
            <div className=".L-text">
                <h1>Scills</h1>
            </div>
   <div className="Scills">

    <img className="scll-img1 s-img" src={img8} alt="" />
    <img className="scll-img2 s-img" src={img9} alt="" />
    <img className="scll-img3 s-img" src={img10} alt="" />
   </div>
   </div>
  )
}

export default Scills;
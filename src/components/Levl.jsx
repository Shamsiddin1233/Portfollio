import "./Level.css"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Levl() {
      useEffect(() => {
    AOS.init({ duration: 2000 });
  });
    return(
        <div className="LevlB" id="Level">
            <div className="L-text">
        <h1>Levl</h1>

            </div>
        <div className="Levl" >
            <div>
                     <div data-aos="fade-down-right">
                            <h2>100% HTML</h2>
                            <div className="htnlb">
                                <div className="html"></div>
                             </div>
                     </div>
                    <div data-aos="fade-up-right">
                            <h2>95% CSS</h2>
                        <div className="cssb">
                            <div className="css"></div>
                        </div>
                    </div>
            </div>
                <div>
                        <div data-aos="fade-down-left">
                             <h2>85% JAVASCRIPT</h2>
                        <div className="javascriptb">
                            <div className="javascript"></div>
                        </div>
                         </div>

                         <div data-aos="fade-up-left">
                             <h2>85% REACT</h2>
                         <div className="reactb">
                             <div className="react"></div>
                        </div>
                         </div>
                </div>
        </div>
        </div>
    )
}
export default Levl
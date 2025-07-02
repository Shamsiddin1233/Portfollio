import "./Project.css"

function Project(){
    return(
        <div className="Pb" id="Project">
                    <div className=".L-text">

                <h1>Projects</h1>
            </div>
        
        <div className="Project">


            <div>
                            <div className="project1 projects">
                <p>I am currently working on this website. I would say this is an exam for our certification. We were given a month and a half to submit this website.</p>
            <a href="https://aquamarine-kheer-0283ed.netlify.app" target="_blank"><button>Olch</button></a> 
                
            </div>
            <div className="project2 projects">
                    <p>We built this website in 1 month of React and the top navigation bars work.</p>
                <a href="https://r2-uy1.netlify.app" target="_blank"><button>React1 project 1</button></a> <br />
            </div>
            </div>
            

            <div>
            <div className="project3 projects">
                <p>This website was given as homework after we just finished the Aos topic.</p>
                   <a href="https://incomparable-dragon-d39d0d.netlify.app" target="_blank"><button>Aos</button></a>
            </div>
            <div className="project4 projects">
                <p>We submitted this website to the React 1 month exam, so I ask you to please visit it to avoid more Aos.</p>
                   <a href="https://remarkable-cranachan-12dfe6.netlify.app" target="_blank"><button>The exam</button></a>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Project
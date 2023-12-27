import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../images/avatar11.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const UserProfile = () => {
  const [avatar,setAvatar] = useState(Avatar)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [currentPassword,setCurrentPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [confirmNewPassword,setConfirmNewPassword] = useState('')
  return (
    <section className="profile">
      <div className="container profile__container">
        <Link to = {`/myposts/sdfsdf`} className='btn'>My Posts</Link>
      <div className="profile__details">
        <div className="avatar__wrapper">
          <img src= {avatar} alt ="" />
          <form className='avatar__form'>
            <input type="file" name="avatar" id="avatar"  onChange={  e=>{setAvatar(e.target.files[0])}} accept='png, jpg, jpeg' />
            <label htmlFor="avatar"><FaEdit /></label>
          </form>
          <button className="profile__avatar-btn">
            <FaCheckCircle />
          </button>
        </div>
        <h1>Bhavya Thumar</h1>

        <form  className="form profile_form">
          <p className='form__error-message'>ERROR</p>
          <input type="text" placeholder='Full Name' value= {name} onChange={e=> setName(e.target.value)}  name="" id="" />
          <input type="email" placeholder='Email' value= {email} onChange={e=> setEmail(e.target.value)}  name="" id="" />
          <input type="password" placeholder='Password' value= {currentPassword} onChange={e=> setCurrentPassword(e.target.value)}  name="" id="" />
          <input type="password" placeholder='New Password' value= {newPassword} onChange={e=> setNewPassword(e.target.value)}  name="" id="" />
          <input type="password" placeholder='Confirm New Password' value= {confirmNewPassword} onChange={e=> setConfirmNewPassword(e.target.value)}  name="" id="" />
          <button type = 'submit' className="btn primary">Update Details</button>
        </form>
      </div>
      </div>
    </section>
  )
}

export default UserProfile
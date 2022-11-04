import React from 'react'
import profileimg from '/src/profile.png'

function Profile() {
  return (
    <div>
      <section>
        <div className="profile-header">
          <img src={profileimg} alt="" srcset="" />
          <h3 id="username">kaslong</h3>
        </div>
        <div className="links">
          <a href="">Twitter Link</a>
          <a href="">Zuri Team</a>
          <a href="">Zuri Books</a>
          <a href="">Python Books</a>
          <a href="">Design Books</a>
          <a href="">Background Check for Coders</a>
          <a href="/contact">Contact Me</a>
        </div>
      </section>
    </div>
  )
}

export default Profile

import React from 'react'
import profileimg from '/src/profile.png'

function Profile() {
  return (
    <div>
      <section>
           <div class="img">
              <img src={profileimg} alt="" srcset="" />
            </div>
            <div class="text">kaslong</div>
            <div class="container">
                <div>
                    <a href="https://twitter.com/kaslong_">Twitter Link</a>
                    <a href="https://training.zuri.team/">Zuri Team</a>
                    <a href="https://books.zuri.team/">Zuri Books</a>
                    <a href="https://books.zuri.team/python-for-begginners">Python Books</a>
                    <a href="https://books.zuri.team/design-rule">Design Books</a>
                    <a href="https://background.zuri.team/">Background Check for Coders</a>
                    <a href="/contact">Contact Me</a>
                </div>

            </div>
      </section>
    </div>
  )
}

export default Profile

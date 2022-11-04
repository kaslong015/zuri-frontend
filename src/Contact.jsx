import React from 'react'

export default function Contact() {
    return (
        <section>
            <h1 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Contact Me</h1>
            <p>Hi there contact me to ask me about anything you have in mind</p>
            <div className="Name">
                <div>
                    <label>First name</label><br />
                    <input type="text" id="first_name" placeholder="enter your last name"></input>
                </div>
                <div>
                    <label>Last name</label><br />
                    <input type="text" id="last_name" placeholder="enter your last name"></input>
                </div>
            </div>
            <div>
                <lable>Email</lable><br />
                <input type="email" id="email" placeholder='example@gmail.com'></input>
            </div>
            <div>
                <label>Message</label><br />
                <textarea rows="10" cols="84" placeholder="Send me a message and i will relpy you" id="massage"></textarea>
            </div>
            <div>
                <input type="checkbox"></input> you agree to providing your data to name who may contact you
            </div>
            <div>
                <button style={{ width: "98%", backgroundColor: 'blue', color: "white", marginTop: "15px" }}>send message</button>
            </div>
            <div>
                <a href="/">back home</a>
            </div>

        </section >

    )
}

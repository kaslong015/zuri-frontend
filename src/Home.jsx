import tasklogo from '/src/log.png';

import React from 'react'

function Home() {
    return (
        <div>
            <section>
                <div className="logo">
                    <img src={tasklogo} />
                </div>
                <div className="task-header">
                    <h1>Front-end Stage 1 task</h1>
                </div>
                <div className="code-section">
                    <div className="code">
                        💡 <code>Technologies to be used must include React</code>
                    </div>
                    <div className="code">
                        💡 <span>Make frequent atomic commits to your Github repository and keep standard on commit
                            <br />message</span>
                    </div>
                </div>
                <div className="ul-section">
                    <ul>
                        <li>Create a page like linktree that allows a person show their personal profile and likn to various
                            digital thinkgs that they sell. <strong>Details below.</strong></li>
                        <li>Make frequent atomic commits to your Github repository and keep standard on commit messages</li>
                    </ul>
                </div>
                <div className="profile-section">
                    <h1>The Profile Section</h1>
                    <ul>
                        <li>a profile with an id 'profile_image'</li>
                        <li>Your twitter username with id 'twitter'</li>
                        <li>Your slack username with id <strong>'slack' but this should be hidden (available in code but
                            cannot be seen)</strong></li>
                    </ul>
                </div>
                <div className="link-section">
                    <h1>The link section</h1>
                    <ul>
                        <li>A Link Styles as a Button with an id <strong>'btn_zuri' </strong>that redirects to <a
                            href="https://training.zuri.team/">"https://training.zuri.team/"</a></li>
                        <li>A Link Styles as a Button with an id <strong>'books' </strong>that redirects to <a
                            href="https://books.zuri.team/">"https://books.zuri.team/"</a> with title and a subtext
                            describing that this is where you find books about design and coding </li>
                        <li>A Link Styles as a Button with an id <strong>'python_book' </strong>that redirects to <a
                            href="https://books.zuri.team/python-for-begginners?ref_id=<yourslackname>">"https://books.zuri.team/python-for-begginners?ref_id=
                            yourslackname"
                        </a>,where you feature the book as if you where selling it. the reduce id must be unique and
                            give you royalties if any sales of book comes</li>
                        <li>A Link Styles as a Button with an id <strong>'pitch' </strong>that redirects to <a
                            href="https://background.zuri.team/">"https://background.zuri.team/"</a>,where you pitch a
                            service for doing background checks on coders. Use a good selling sentence </li>
                        <li>A Link Styles as a Button with an id <strong>'book_design' </strong>that redirects to <a
                            href="https://books.zuri.team/design-rule">"https://books.zuri.team/design-rule"</a>, where
                            you pitch the free design books offered by zuri</li>

                    </ul>
                    <a href="/contact" id="contact">Contact</a>
                </div>

            </section>
        </div>
    )
}

export default Home;



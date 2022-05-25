import React from "react";


class Contact extends React.Component {
    render() {
        return (

            <div className="rm-right">
                {/* .rm-front */}
                <div className="rm-front">
                    {/* BACK COVER IMAGE */}
                    <div className="cover">
                        {/* cover-image-holder */}
                        <div className="cover-image-holder">
                            <h1>fsafsaf</h1>
                            {/* <img src="images/site/cover-2.jpg" alt="cover-image" />
                             */}
                        </div>
                        {/* cover-image-holder */}
                    </div>
                    {/* BACK COVER IMAGE */}
                </div>
                {/* .rm-front */}
                {/* CONTACT PAGE */}
                <div id="contact" className="rm-back page">
                    {/* .antiscroll-wrap */}
                    <div className="antiscroll-wrap">
                        {/* .antiscroll-inner */}
                        <div className="antiscroll-inner">
                            {/* CONTENT */}
                            <div className="content">
                                <h2><span>CONTACT</span></h2>
                                {/*<h3>Where am I in this world?</h3>
                          <div class="map">
                          
                                  <iframe src="https://maps.google.com/maps?source=s_q&amp;f=q&amp;hl=en&amp;geocode=&amp;q=little+italy&amp;aq=&amp;sll=36.558188,-86.709595&amp;sspn=3.878053,8.453979&amp;ie=UTF8&amp;hq=&amp;hnear=Little+Italy,+New+York&amp;t=p&amp;ll=40.84706,-73.125&amp;spn=6.647611,26.367188&amp;z=5&amp;output=embed"></iframe>
                                  
                          </div>*/}
                                <p className="center">Please feel free to contact me about anything.</p>
                                <h3><span>LET'S SOCIALIZE</span></h3>
                                {/* SOCIAL */}
                                <ul className="social">
                                    <li>
                                        <a className="facebook" href="#" />
                                    </li>
                                    <li>
                                        <a className="twitter" href="#" />
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#" />
                                    </li>
                                    <li>
                                        <a className="google" href="#" />
                                    </li>
                                    <li>
                                        <a className="pinterest" href="#" />
                                    </li>
                                    <li>
                                        <a className="github" href="#" />
                                    </li>
                                    <li>
                                        <a className="behance" href="#" />
                                    </li>
                                    <li>
                                        <a className="dribble" href="#" />
                                    </li>
                                    {/*<li><a class="instagram" href="#"></a></li>
                              <li><a class="lastfm" href="#"></a></li>
                              <li><a class="rss" href="#"></a></li>
                              <li><a class="vimeo" href="#"></a></li>
                              <li><a class="forrst" href="#"></a></li>
                              <li><a class="skype" href="#"></a></li>
                              <li><a class="picassa" href="#"></a></li>
                              <li><a class="youtube" href="#"></a></li>
                              <li><a class="flickr" href="#"></a></li>
                              <li><a class="tumblr" href="#"></a></li>
                              <li><a class="blogger" href="#"></a></li>
                              <li><a class="delicious" href="#"></a></li>
                              <li><a class="digg" href="#"></a></li>
                              <li><a class="friendfeed" href="#"></a></li>
                              <li><a class="wordpress" href="#"></a></li>*/}
                                </ul>
                                {/* SOCIAL */}
                                <h3><span>DROP ME A LINE!</span></h3>
                                {/* .contact-form */}
                                <div className="contact-form">
                                    {/* LETTER */}
                                    <div className="letter cf">
                                        <div className="stamp">
                                            <img src="images/site/stamp-image.png" alt="stamp" />
                                        </div>
                                        <div className="letter-info">
                                            <h4>Hanpeng Wang</h4>
                                            <p><a href="#"><i>johhny@gmail.com</i></a></p>
                                            <p> - Planet Earth</p>
                                        </div>
                                    </div>
                                    {/* LETTER */}
                                    <form id="contact-form" action="send-mail.php" method="post">
                                        {/* enter your e-mail address here */}
                                        <input type="hidden" id="to" name="to" defaultValue="jonhdoeeee@jonhdoe.com" />
                                        <p>
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" className="required" />
                                        </p>
                                        <p>
                                            <label htmlFor="email">Email</label>
                                            <input type="text" name="email" id="email" className="required email" />
                                        </p>
                                        <p>
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" name="subject" id="subject" className="required" />
                                        </p>
                                        <p>
                                            <label htmlFor="message">Message</label>
                                            <textarea name="message" id="message" className="required" defaultValue={""} />
                                        </p>
                                        <p>
                                            <img className="ajax-loader" src="images/bckg/loader_light.gif" alt="Sending ..." />
                                            <input type="submit" className="btn submit" defaultValue="SEND" />
                                        </p>
                                    </form>
                                </div>
                                {/* .contact-form */}
                            </div>
                            {/* CONTENT */}
                        </div>
                        {/* .antiscroll-inner */}
                    </div>
                    {/* .antiscroll-wrap */}
                    {/* close link */}
                    <a className="rm-close"><span /></a>
                    {/* close link */}
                </div>
                {/* /rm-back */}
                {/* CONTACT PAGE */}
            </div>
        );
    }
}


export default Contact;



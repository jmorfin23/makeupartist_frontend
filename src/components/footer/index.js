import React from 'react';

const Footer = () => {
  return(
    <div>
      <footer>
        <section className="section footer-primary">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 text-center">
                <h3>Newsletter Signup</h3>
                <p className="pb-20">Get Our special offers and the ultimate hair care tips & tricks!</p>
                <form className="pb-40">
                  <div className="input-group">
                    <input type="email" className="form-control" required  name="nemail" id="nemail" placeholder="Email address" />
                    <div className="input-group-btn">
                      <button type="submit" className="btn btn-primary">Subscribe</button>
                    </div>
                    {/*  /btn-group */}
                  </div>
                  {/*  /input-group */}
                </form>
                <h3 className="pb-10">Let's Stay Connected</h3>
                <div className="footer-social-icons"> <a href="#" target="_blank"><i className="fa fa-facebook"></i></a> <a href="#" target="_blank"><i className="fa fa-twitter"></i></a> <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> <a href="#" target="_blank"><i className="fa fa-google-plus"></i></a> </div>
              </div>
              {/* col*/}
            </div>
            {/* row*/}
          </div>
          {/* container*/}
        </section>
        {/* footer-primary*/}
        <section className="section footer-copyright">
          <div className="container">
            <ul className="footer-nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
            <p>2020 Jerlicia Jordan. All Rights reserved.</p>
          </div>
          {/* container*/}
        </section>
        {/* footer-primary*/}
      </footer>
      <a className="goto-top"><i className="fa fa-angle-double-up" aria-hidden="true"></i></a>
    </div> //end of footer div

  )
}

export default Footer; 

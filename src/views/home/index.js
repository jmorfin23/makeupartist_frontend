import React, { Component } from 'react';

// ========= image imports =========
import clientphoto from '../../images/client.jpg';
import placeholder from '../../images/blog/placeholder.jpg';
import companylogo from '../../images/logo.png';
import logo1 from '../../images/logos/logo1.png';
import logo2 from '../../images/logos/logo2.png';
import logo3 from '../../images/logos/logo3.png';
import logo4 from '../../images/logos/logo4.png';
import logo5 from '../../images/logos/logo5.png';
import logo6 from '../../images/logos/logo6.png';
import placeholder1 from '../../images/gallery/1.jpg';
// ==================================

class Home extends Component {
  render() {
    return (
      <div className="homepage">
      <div className="preloader">
        <div className="animation circle"></div>
      </div>
      {/* ============== end preloader ============== */}
      <nav className="navbar navbar-default bootsnav">
        <div className="container">
          {/*  Start Header Navigation */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> <i className="fa fa-bars"></i> </button>
            <a className="navbar-brand" href="index.html"><img src={companylogo} className="logo" alt="" /></a></div>
          {/*  End Header Navigation */}
          {/*  Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="fadeInUp" data-out="fadeOutDown">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li className="dropdown"> <a href="services.html" className="dropdown-toggle" data-toggle="dropdown">Services</a>
                <ul className="dropdown-menu">
                  <li><a href="single-service.html">Bridal Makeup</a></li>
                  <li><a href="single-service.html">TV Film Commercial</a></li>
                  <li><a href="single-service.html">Special occasions</a></li>
                </ul>
              </li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li className="dropdown"> <a href="blog.html" className="dropdown-toggle" data-toggle="dropdown">Blog</a>
                <ul className="dropdown-menu">
                  <li><a href="blog-left-sidebar.html">Left Sidebar</a></li>
                  <li><a href="post.html">Single Post</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>
          {/*  /.navbar-collapse */}
        </div>
        {/* container*/}
      </nav>
      {/* navbar*/}
      <div id="mycarousel" className="carousel slide carousel-fade" data-ride="carousel">
        {/*  Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
          <li data-target="#mycarousel" data-slide-to="1"></li>
        </ol>
        {/*  Wrapper for slides */}
        <div className="carousel-inner" role="listbox">
          <div className="item"> <img src="../../../public/assetscopy/images//slide1.jpg" alt="First Image" />
            <div className="carousel-caption">
              <div className="carousel-caption-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5 col-md-offset-7">
                      <h1>Professional<br/>
                        Makeup Artist</h1>
                      <p>Whatever the occasion is, be sure that my <strong>professional makeup</strong> work and products will make you <strong>shine</strong> and stand out!</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* carousel-caption-inner*/}
            </div>
            {/* carousel-caption*/}
          </div>
          {/* item 1*/}
          <div className="item"> <img src="assets/images/slide2.jpg" alt="" />
            <div className="carousel-caption">
              <div className="carousel-caption-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <h1>Professional<br/>
                        Makeup Artist</h1>
                      <p>Whatever the occasion is, be sure that <strong>my professional</strong> makeup work and products will make you <strong>shine </strong>and stand out!</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* carousel-caption-inner*/}
            </div>
            {/* carousel-caption*/}
          </div>
          {/* item 2*/}
        </div>
        {/* carousel-inner*/}
        {/*  Controls */}
        <a className="left carousel-control" href="#mycarousel" role="button" data-slide="prev"> <span className="fa fa-angle-left" aria-hidden="true"></span> </a> <a className="right carousel-control" href="#mycarousel" role="button" data-slide="next"> <span className="fa fa-angle-right" aria-hidden="true"></span> </a> </div>
      {/* mycarousel*/}
      <section className="section section-services">
        {/*  section-title */}
        <div className="section-title text-center">
          <h1 className="decor">Makeup and Hair <span>Stylist Services</span></h1>
        </div>
        {/*  end section-title */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="service-box service-color-one">
                <div className="service-img"><img src="assets/images/service1.jpg" alt=""/></div>
                <div className="service-contents">
                  <h1>Bridal Makeup</h1>
                  <p>Considering just how important the makeup arts are for these industries, the quality of my work was required to match the className. After hundreds of sessions it seems it did!</p>
                  <p className="service-price pb-10"><span className="decor-text">starts from</span> <strong>$156.00</strong></p>
                  <a className="btn btn-primary" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i> </a> </div>
                {/* service-contents*/}
              </div>
              {/* service-box*/}
            </div>
            {/* col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="service-box service-color-two">
                <div className="service-img"><img src="assets/images/service1.jpg" alt=""/></div>
                <div className="service-contents">
                  <h1>tv film commercial</h1>
                  <p>Considering just how important the makeup arts are for these industries, the quality of my work was required to match the className. After hundreds of sessions it seems it did!</p>
                  <p className="service-price pb-10"><span className="decor-text">starts from</span> <strong>$156.00</strong></p>
                  <a className="btn btn-primary" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i> </a> </div>
                {/* service-contents*/}
              </div>
              {/* service-box*/}
            </div>
            {/* col-md-4*/}
            <div className="col-md-4 col-sm-6">
              <div className="service-box service-color-three">
                <div className="service-img"><img src="assets/images/service1.jpg" alt=""/></div>
                <div className="service-contents">
                  <h1>Special occasions</h1>
                  <p>Considering just how important the makeup arts are for these industries, the quality of my work was required to match the className. After hundreds of sessions it seems it did!</p>
                  <p className="service-price pb-10"><span className="decor-text">starts from</span> <strong>$156.00</strong></p>
                  <a className="btn btn-primary" href="#">Read More <i className="fa fa-angle-double-right" aria-hidden="true"></i> </a> </div>
                {/* service-contents*/}
              </div>
              {/* service-box*/}
            </div>
            {/* col-md-4*/}
          </div>
          {/* row*/}
        </div>
        {/* container*/}
      </section>
      {/* section-services*/}
      <section id="gallery" className="section section-gallery pt-zero">
        {/*  section-title */}
        <div className="section-title text-center">
          <h1 className="text-center decor">My Awesome <span>Portfolio</span></h1>
        </div>
        {/*  end section-title */}
        <div className="container">
          {/*  Portfolio items */}
          <ul className="portfolio-filter list-inline text-center">
            <li className="current"><a href="" data-filter="*">All Works</a></li>
            <li className=""><a href="" data-filter=".wedding">Wedding</a></li>
            <li className=""><a href="" data-filter=".fashion">Hairstyle</a></li>
            <li className=""><a href="" data-filter=".nature">Commercial</a></li>
            <li className=""><a href="" data-filter=".studio">Studio</a></li>
          </ul>
          <div className="portfolio-items row">
            <div className="portfolio-item item height-2x fashion col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: `url( ${placeholder1})` }}></div>
              <a href="assets/images/gallery/1.jpg" className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item wedding col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: 'url(../../images/gallery/2.jpg)'}}></div>
              <a href="../../../public/assetscopy/images/gallery/2.jpg" className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item nature col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{ backgroundImage: 'url(../../../public/assetscopy/images/gallery/3.jpg)'}}></div>
              <a href="../../images/gallery/3.jpg" className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item studio col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: 'url(../../../public/assetscopy/images/gallery/4.jpg)'}}></div>
              <a href="../../images/gallery/4.jpg" className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: 'url(../../../public/assetscopy/images/gallery/5.jpg)'}}></div>
              <a href="../../images/gallery/5.jpg" className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item width-2x wedding col-xs-12 col-sm-6 col-md-8">
              <div className="a-img" style={{backgroundImage: 'url(../../../public/assetscopy/images/gallery/6.jpg)'}}></div>
              <a href="../../images/gallery/6.jpg" className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item height-2x nature col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: 'url(../../../public/assetscopy/images/gallery/7.jpg)'}}></div>
              <a href="../../images/gallery/7.jpg" className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item studio col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: 'url(../../images/gallery/8.jpg)'}}></div>
              <a href="../../images/gallery/8.jpg" className="mfp-image"><i className="fa fa-search"></i></a> </div>
            <div className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4">
              <div className="a-img" style={{backgroundImage: 'url(../../images/gallery/9.jpg)'}}></div>
              <a href="../../images/gallery/9.jpg" className="mfp-image"><i className="fa fa-search"></i></a> </div>
          </div>
          {/*  END Portfolio items */}
        </div>
        {/* container*/}
      </section>
      {/* section-gallery*/}
      <section className="section section-testimonials">
        {/*  section-title */}
        <div className="section-title text-center">
          <h1>Customer <span>saying</span></h1>
        </div>
        {/*  end section-title */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div id="testimonial-carousel" className="testimonial-carousel owl-carousel owl-theme">
                <div className="testimonial-item">
                  <div className="client-img text-center"><img src={clientphoto} alt="" className="img-circle" /></div>
                  <div className="quote-icons"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
                  <p className="text-center">Finding the shampoo that is both healthy and nice for your hair is not easy for any woman… So when I found how many hair care products are offered here I was hooked once and for all!</p>
                  <div className="client-title text-center"><strong>Amanda Pool</strong></div>
                </div>
                {/* testmonial-item 1*/}
                <div className="testimonial-item">
                  <div className="client-img text-center"><img src={clientphoto} alt="" className="img-circle" /></div>
                  <div className="quote-icons"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
                  <p className="text-center">Finding the shampoo that is both healthy and nice for your hair is not easy for any woman… So when I found how many hair care products are offered here I was hooked once and for all!</p>
                  <div className="client-title text-center"><strong>Amanda Pool</strong></div>
                </div>
                {/* testmonial-item 2*/}
                <div className="testimonial-item">
                  <div className="client-img text-center"><img src={clientphoto} alt="" className="img-circle" /></div>
                  <div className="quote-icons"><i className="fa fa-quote-left" aria-hidden="true"></i></div>
                  <p className="text-center">Finding the shampoo that is both healthy and nice for your hair is not easy for any woman… So when I found how many hair care products are offered here I was hooked once and for all!</p>
                  <div className="client-title text-center"><strong>Amanda Pool</strong></div>
                </div>
                {/* testmonial-item 3*/}
              </div>
              {/* testimonial-carousel*/}
            </div>
            {/* end col*/}
          </div>
          {/* row*/}
        </div>
        {/* container*/}
      </section>
      {/* section-testomonial*/}
      <section id="news" className="section section-blog">
        {/*  section-title */}
        <div className="section-title text-center">
          <h1 className="decor">See what’s new on <span>my Blog</span></h1>
        </div>
        {/*  end section-title */}
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="post-entry">
                <div className="post-thumbnail"> <img src={placeholder} alt=""/> <a href="#"> <i className="fa fa-link"></i> </a> </div>
                {/* post-thumbnial*/}
                <h2> <a href="#">How to wash and style curly hair</a> </h2>
                <ul className="entry-meta">
                  <li> <i className="fa fa-calendar"></i>07 June 2014 </li>
                  <li> <i className="fa fa-comments"></i> <a href="#">7 Comments</a> </li>
                </ul>
                <p>In recent years, an increasingly big number of African American women take a fashion decision to return to their natural...</p>
                <a className="btn btn-primary" href="post.html">Read More </a> </div>
              {/* post-entry*/}
            </div>
            {/* end col*/}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="post-entry">
                <div className="post-thumbnail"> <img src={placeholder} alt=""/> <a href="#"> <i className="fa fa-link"></i> </a> </div>
                {/* post-thumbnial*/}
                <h2> <a href="#">Returning to a natural hair texture</a> </h2>
                <ul className="entry-meta">
                  <li> <i className="fa fa-calendar"></i>07 June 2014 </li>
                  <li> <i className="fa fa-comments"></i> <a href="#">9 Comments</a> </li>
                </ul>
                <p>In recent years, an increasingly big number of African American women take a fashion decision to return to their natural...</p>
                <a className="btn btn-primary" href="post.html">Read More </a> </div>
              {/* post-entry*/}
            </div>
            {/* end col*/}
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="post-entry">
                <div className="post-thumbnail"> <img src={placeholder} alt=""/> <a href="#"> <i className="fa fa-link"></i> </a> </div>
                {/* post-thumbnial*/}
                <h2> <a href="#">Winterish version of rainbow hair?</a> </h2>
                <ul className="entry-meta">
                  <li> <i className="fa fa-calendar"></i>07 June 2014 </li>
                  <li> <i className="fa fa-comments"></i> <a href="#">3 Comments</a> </li>
                </ul>
                <p>In recent years, an increasingly big number of African American women take a fashion decision to return to their natural... </p>
                <a className="btn btn-primary" href="post.html">Read More </a> </div>
              {/* post-entry*/}
            </div>
            {/* end col*/}
          </div>
          {/* row*/}
        </div>
        {/* container*/}
      </section>
      {/* section-blog*/}
      <section className="section section-logos pt-zero">
        {/*  section-title */}
        <div className="section-title text-center">
          <h1 className="decor">Featured <span>on</span></h1>
        </div>
        {/*  end section-title */}
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
              <div className="cleint-logo"> <img src={logo1} alt="" /></div>
            </div>
            {/* end col*/}
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
              <div className="cleint-logo"> <img src={logo2} alt="" /> </div>
            </div>
            {/* end col*/}
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
              <div className="cleint-logo"> <img src={logo3} alt="" /> </div>
            </div>
            {/* end col*/}
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
              <div className="cleint-logo"> <img src={logo4} alt="" /> </div>
            </div>
            {/* end col*/}
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
              <div className="cleint-logo"> <img src={logo5} alt="" /> </div>
            </div>
            {/* end col*/}
            <div className="col-lg-2 col-md-2 col-sm-4 col-xs-6 text-center">
              <div className="cleint-logo"> <img src={logo6} alt="" /> </div>
            </div>
            {/* end col*/}
          </div>
          {/* row*/}
        </div>
        {/* container*/}
      </section>
      {/* section-logo*/}
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

      </div>

    );
  }
}


export default Home;

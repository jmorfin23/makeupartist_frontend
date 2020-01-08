import React, { Component } from 'react';
import girl from '../../../images/girl.jpg';
import placeholder from '../../../images/blog/placeholder.jpg';
import ad from '../../../images/ad.jpg'

class Post1 extends Component {
  render() {
    return(

      <div className="post1">
        <section className="section section-page-title">
          <div className="overlay">
            <h1>Single Post</h1>
          </div>
          {/*overlay*/}
        </section>
        {/*section-page-title*/}
        <section className="section main-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-8">
                <div className="padd-white-box clearfix">
                  <div className="single-post-thumbnail"><a href={placeholder} className="mfp-image" title=""><img src={placeholder} alt="" /></a></div>
                  <h1 className="single-post-title">The Perfect Eyebrows</h1>
                  <ul className="entry-meta">
                    <li><i className="fa fa-calendar"></i>07 June 2014 </li>
                    <li><i className="fa fa-comments"></i><a href="#">7 Comments</a></li>
                  </ul>
                  <div className="entry clearfix">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&nbsp;Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h1>Heading One</h1>
                    <h2>Heading Two</h2>
                    <h3>Heading Three</h3>
                    <h4>Heading Four</h4>
                    <h5>Heading Five</h5>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <blockquote>
                      <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                    </blockquote>
                    <h2>Heading Two</h2>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <span style={{ background: '#f96d5b', color: '#fff' }}>Ut enim ad minim veniam, quis nostrud exercitation.</span>.&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul className="ul">
                      <li>Morbi dignissim urna a accumsan eleifend.</li>
                      <li>Morbi eget dolor et risus pulvinar sollicitudin sit amet sed massa.</li>
                      <li>Donec eget nisi fringilla, condimentum erat non, finibus nibh.</li>
                      <li>Pellentesque aliquet eros bibendum magna suscipit, a ultricies erat tempus.</li>
                      <li>Nunc at sem placerat, imperdiet libero et, laoreet eros.</li>
                    </ul>
                    <blockquote>
                      <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. </p>
                    </blockquote>
                    <ol>
                      <li>Donec eu nisl eu ex aliquam volutpat eu a libero.</li>
                      <li>Mauris non ante ac urna pretium porttitor.</li>
                      <li>In vitae sapien in mauris tincidunt faucibus.</li>
                      <li>Nunc nec libero a urna lacinia malesuada.</li>
                      <li>Praesent congue mauris porta libero euismod finibus.</li>
                      <li>Suspendisse in augue id turpis volutpat eleifend.</li>
                    </ol>
                  </div>
                  {/*entry*/}
                </div>
                {/*padd-white-box*/}
                <div className="related-post-box">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="post-entry post-entry-related">
                        <div className="post-thumbnial"> <a href="post.html"> <img src={placeholder} alt="" /> </a> </div>
                        {/*post-thumbnial*/}
                        <div className="post-entry-related-contents">
                          <h1><a href="post.html">After the Shoot: Forgotten Post ipsum ...</a></h1>
                          <ul className="entry-meta">
                            <li><i className="fa fa-calendar"></i>07 June 2014 </li>
                          </ul>
                        </div>
                        {/*post-entry-related-contents*/}
                      </div>
                      {/*post-entry*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="post-entry post-entry-related">
                        <div className="post-thumbnial"> <a href="post.html"> <img src={placeholder} alt="" /> </a> </div>
                        {/*post-thumbnial*/}
                        <div className="post-entry-related-contents">
                          <h1><a href="post.html">The most common mistakes...</a></h1>
                          <ul className="entry-meta">
                            <li><i className="fa fa-calendar"></i>07 June 2014 </li>
                          </ul>
                        </div>
                        {/*post-entry-related-contents*/}
                      </div>
                      {/*post-entry*/}
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="post-entry post-entry-related blue-bg">
                        <div className="post-thumbnial"> <a href="post.html"> <img src={placeholder} alt="" /> </a> </div>
                        {/*post-thumbnial*/}
                        <div className="post-entry-related-contents">
                          <h1><a href="post.html">Recession is a good opportunity to...</a></h1>
                          <ul className="entry-meta">
                            <li><i className="fa fa-calendar"></i>07 June 2014 </li>
                          </ul>
                        </div>
                        {/*post-entry-related-contents*/}
                      </div>
                      {/*post-entry*/}
                    </div>
                    {/*end col*/}
                  </div>
                  {/*row*/}
                </div>
                {/*related post box*/}
              </div>
              {/*col-md-8*/}
              {/*sidebar*/}
              <div className="col-md-4 col-sm-4" id="sidebar">
                <div className="sidebar-box clearfix">
                  <h3 className="widget-title">About me</h3>
                  <p><img src={girl} alt="" /></p>
                  <p>Vivamus porta ante eget sem rutrum egestas. Etiam sit amet ex ullamcorper ante mattis sodales. Duis dapibus, quam ac elementum suscipit, felis leo eleifend tortor.</p>
                  <div className="social-icons"> <a href="#" target="_blank"><i className="fa fa-facebook"></i></a> <a href="#" target="_blank"><i className="fa fa-twitter"></i></a> <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a> <a href="#" target="_blank"><i className="fa fa-instagram"></i></a> <a href="#" target="_blank"><i className="fa fa-google-plus"></i></a> </div>
                </div>
                {/*sidebar-box*/}
                <div className="sidebar-box clearfix">
                  <h3 className="widget-title">Sign up Newsletter</h3>
                  <p>Vivamus porta ante eget sem rutrum egestas. Etiam sit amet ex ullamcorper ante mattis sodales. Duis dapibus, quam ac elementum suscipit, felis leo eleifend tortor.</p>
                  <form className="b-form-contacts ui-form" id="contactForm" action="#" method="post">
                    <p>
                      <input className="form-control" id="user-name" name="user-name" placeholder="your name" required="required" type="text"/>
                    </p>
                    <p>
                      <input className="form-control" id="user-email" name="user-email" placeholder="email address" required="required" type="email"/>
                    </p>
                    <button className="btn btn-primary">Subscribe <i className="fa fa-angle-double-right"></i></button>
                  </form>
                </div>
                {/*sidebar-box*/}
                <div className="sidebar-box clearfix no-padding"> <img src={ad} alt="" /> </div>
                {/*sidebar-box*/}
                <div className="sidebar-box clearfix">
                  <h3 className="widget-title">Tags Cloud</h3>
                  <a href="#" className="tag-link">beautiful</a> <a href="#" className="tag-link">photography</a> <a href="#" className="tag-link">wedding</a> <a href="#" className="tag-link">travel</a> <a href="#" className="tag-link">discover</a> <a href="#" className="tag-link">food</a> <a href="#" className="tag-link">woman</a> <a href="#" className="tag-link">photography</a> <a href="#" className="tag-link">style</a> </div>
                {/*sidebar-box*/}
                <div className="sidebar-box clearfix">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="widget-categories">
                    <li><a href="#" title="Nature Photography">Nature Photography</a></li>
                    <li><a href="#" title="Wild Photography">Wild Photography</a></li>
                    <li><a href="#" title="Building Photography">Building Photography</a></li>
                    <li><a href="#" title="Photography Designing">Photography Designing</a></li>
                    <li><a href="#" title="Pricig Table">Pricing Table</a></li>
                  </ul>
                </div>
                {/*sidebar-box*/}
              </div>
              {/*col-md-3*/}
            </div>
            {/*row*/}
          </div>
        </section>
      </div>
    );
  }
}

export default Post1;

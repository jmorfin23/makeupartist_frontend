import React from 'react';
import './index.css';
import companylogo from '../../images/logo.png';
import { useSelector} from 'react-redux';


const Header = () => {
  return(
    <nav className="navbar navbar-default bootsnav">
      <div className="container">
        {/*  Start Header Navigation */}
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu"> <i className="fa fa-bars"></i> </button>
          <a className="navbar-brand" href="/home"><img src={companylogo} className="logo" alt="" /></a></div>
        {/*  End Header Navigation */}
        {/*  Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="nav navbar-nav navbar-right" data-in="fadeInUp" data-out="fadeOutDown">
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li className="dropdown"> <a href="/services" className="dropdown-toggle" data-toggle="dropdown">Services</a>
              <ul className="dropdown-menu">
                <li><a href="/singleservice">Bridal Makeup</a></li>
                <li><a href="/">TV Film Commercial</a></li>
                <li><a href="/">Special occasions</a></li>
              </ul>
            </li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li className="dropdown"> <a href="/blog" className="dropdown-toggle" data-toggle="dropdown">Blog</a>
              <ul className="dropdown-menu">
                <li><a href="leftsidebar">Left Sidebar</a></li>
                <li><a href="/post1">Single Post</a></li>
              </ul>
            </li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/admin">Admin</a></li>
          </ul>
        </div>
        {/*  /.navbar-collapse */}
      </div>
      {/* container*/}
    </nav>
  )
}

export default Header;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import science from '../images/science.png';
import math from '../images/math.png';
import logo from '../images/logo.png';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="navbar" style={{ direction: "rtl" }}>
        <nav>
          <ul>
            <li><img src={logo} alt="logo" /></li>
            <li style={{ backgroundColor: "#105A5D", borderRadius: "50%", padding: '10px', color: "white" }}>نايف</li>
            <li style={{ backgroundColor: "#105A5D", borderRadius: "50%", padding: '10px', color: "white" }}>الصفحة الرئيسية</li>
            <li>مقرنا</li>
            <li>درجات طلابنا</li>
            <li>تواصل معنا</li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <div className="card" onClick={() => navigate('/subjectsk')}>
          <img src={math} alt="math" />
          <h1>مسار القدرات</h1>
          <p>لطلبة / أول / ثاني / ثالث ثانوي</p>
        </div>
        <div className="card" onClick={() => navigate('/subjectst')}>
          <img src={science} style={{ width: '200px' }} alt="Science" />
          <h1>مسار التحصيلي</h1>
          <p>لطلبة ثالث ثانوي</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
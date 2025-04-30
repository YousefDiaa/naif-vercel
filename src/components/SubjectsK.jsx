import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import lafzy from '../images/lafzy.png';
import kamy from '../images/kamy.png';
import "./SubjectsK.css";
import logo from '../images/logo.png';

function SubjectsK() {
  const navigate = useNavigate();
  return (
    <div >
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
            <div className="card" onClick={() => navigate('/ai')}>
              <img src={lafzy} alt="math" style={{ width: '200px' }} />
              <h1> لفظي</h1>
              <p> 
              سنتعلم في هذا المسار على اهم طرق الحل في الفسم اللفظي</p>
            </div>
            <div className="card" onClick={() => navigate('/ai')}>
              <img src={kamy} style={{ width: '200px' }} alt="Science" />
              <h1> كمي</h1>
              <p>
              سنتعلم في هذا المسار على اهم طرق الحل في القسم الكمي</p>
            </div>
          </div>
        </div>
  )
}

export default SubjectsK
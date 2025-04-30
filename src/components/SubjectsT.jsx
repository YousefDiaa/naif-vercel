import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./HomePage.css";
import math from '../images/math1.png';
import science1 from '../images/science1.png';
import scince2 from '../images/science2.png';
import "./SubjectT.css";
import logo from '../images/logo.png';

function SubjectsT() {
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
              <img src={math} alt="math" style={{ width: '200px' }} />
              <h1> رياضيات</h1>
              <p> 
              سنتعلم في هذا المسار على اهم طرق الحل في قسم الرياضيات</p>
            </div>
            <div className="card" onClick={() => navigate('/ai')}>
              <img src={science1} style={{ width: '200px' }} alt="Science" />
              <h1> احياء</h1>
              <p>
              سنتعلم في هذا المسار على اهم طرق الحل في قسم الاخياء</p>
            </div>
            <div className="card" onClick={() => navigate('/ai')}>
              <img src={scince2} style={{ width: '200px' }} alt="Science" />
              <h1> فيزياء</h1>
              <p>
              سنتعلم في هذا المسار على اهم طرق الحل في قسم الفيزياء</p>
            </div>
          </div>
        </div>
  )
}

export default SubjectsT
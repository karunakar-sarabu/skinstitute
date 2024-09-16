// import React from 'react';
//  import { Link } from 'react-router-dom';
//  import { FaHome, FaBook, FaUserGraduate, FaEnvelope, FaChalkboardTeacher } from 'react-icons/fa';
// import './Navbar.css';// You can add custom CSS for styling

// const Navbar = () => {
//   return (
    
//     <nav className="navbar">
//      <div className="navbar-logo">
//         <Link to="/">MyInstitute</Link>
//         {console.log("navbar")}
//         {/* hello */}
//       </div> 
      
    
//        <ul className="navbar-links">
//         <li>
//           <Link to="/">
//             <FaHome className="navbar-icon" />
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/courses">
//             <FaBook className="navbar-icon" />
//             Courses
//           </Link>
//         </li>
//         <li>
//           <Link to="/faculty">
//             <FaChalkboardTeacher className="navbar-icon" />
//             Faculty
//           </Link>
//         </li>
//         <li>
//           <Link to="/contact">
//             <FaEnvelope className="navbar-icon" />
//             Contact
//           </Link>
//         </li>
//       </ul> 
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook, FaChalkboardTeacher, FaEnvelope } from 'react-icons/fa';
import './Navbar.css'; // Import custom CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="navbar-logo-link">S.K.Institute</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            <FaHome className="navbar-icon" />&nbsp;&nbsp;
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="nav-link">
            <FaBook className="navbar-icon" />&nbsp;&nbsp;
            Courses
          </Link>
        </li>
        <li>
          <Link to="/faculty" className="nav-link">
            <FaChalkboardTeacher className="navbar-icon" />&nbsp;&nbsp;
            Faculty
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">
            <FaEnvelope className="navbar-icon" />&nbsp;&nbsp;
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

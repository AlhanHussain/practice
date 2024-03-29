import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-success ${isOpen ? 'open' : ''}`}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">MyFoodiee</Link>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" activeClassName="active" to="/createuser">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
// import React from 'react'
// import { Link } from 'react-router-dom'


// export default function Navbar() {
//   return (
//     <div>
//      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//   <div className="container-fluid">
//     <Link className="navbar-brand fs-1 fst-italic" to="/">MyFoodiee</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link " aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/Login">Login</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/createuser">Signup</Link>
//         </li>
     
       
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

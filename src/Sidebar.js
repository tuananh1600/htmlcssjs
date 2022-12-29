import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__logo">
            <a href="#"><img src="./img/company_logo.png" alt=""/></a>
        </div>
        <div className="sidebar__menu">
            <ul className="menu">
                <li><a href="#">Employees</a>
                    <ul className="submenu">
                        <li><a href="#">Employees</a></li>
                        <li><a href="#">Adjust Employees</a></li>
                        <li><a href="#">Members Birthday</a></li>
                    </ul>
                </li>
                <li><a href="#">Departments</a></li>
                <li><a href="#">Termination Request</a></li>
            </ul>
        </div>
        <div className="sidebar__footer">
            <p>Powered by <a href="#" className="sidebar__footer--bold">Odoo</a></p>
        </div>
    </div>
  )
}

export default Sidebar
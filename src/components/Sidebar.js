import React from 'react'
import general from './bookmark.png'
import health from './healthcare.png'
import entertainmnet from './video.png'
import sports from './sports.png'
import business from './stats.png'
import science from './science.png'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const showMeSideBar = () => {
            if (!document.querySelector('.sidebar').classList.contains('ok')) {
                document.querySelector('.sidebar').style.display = "block"
                document.querySelector('.sidebar').style.top = "23vh"
                document.querySelector('.sidebar').classList.add('ok')
            }
            else {
                document.querySelector('.sidebar').style.display = "none"
                
                document.querySelector('.sidebar').classList.remove('ok')
            }
        }
    

        return (
            <div>
                <div className="button">
                    <div className="icon icon1 sp-class" onClick={showMeSideBar}><i className="fa-solid fa-bars"></i></div>
                </div>

                <div className="sidebar fixed-top">
                    <li className='icon'><NavLink to="/"><img src={general} alt="" width={"40px"} /></NavLink></li>
                    <li className='icon'><NavLink to="/health"><img src={health} alt="" width={"40px"} /></NavLink></li>
                    <li className='icon'><NavLink to="/entertainment"><img src={entertainmnet} alt="" width={"40px"} /></NavLink></li>
                    <li className='icon'><NavLink to="/sports"><img src={sports} alt="" width={"40px"} /></NavLink></li>
                    <li className='icon'><NavLink to="/business"><img src={business} alt="" width={"40px"} /></NavLink></li>
                    <li className='icon'><NavLink to="/science"><img src={science} alt="" width={"40px"} /></NavLink></li>

                </div>
            </div>
        )
    }


export default Sidebar

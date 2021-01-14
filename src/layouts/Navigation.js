import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const list = [
    {name: "start", path: "/", exact: true},
    {name: "produkty", path: "products", exact: false},
    {name: "kontakt", path: "contact", exact: false},
    {name: "panel admina", path: "admin", exact: false},
]

const Navigation = () => {
    const menu = list.map(task =>(
        <li key={task.name}>
            <NavLink to = {task.path} exact={task.exact}>{task.name}</NavLink>
        </li>
    ))
    return ( 
            <nav className = 'main'>
                <ul>
                    {menu}
                </ul>
            </nav>
     );
}
 
export default Navigation;
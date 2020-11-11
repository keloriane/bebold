import React from 'react';
import {Link} from "react-router-dom";
import logoB from "../../assets/images/LOGOBEBOLD.jpg";

const Nav = () => {

    return (
        <nav>
            <ul>
                <li> <Link to={"/"}>Accueil</Link> </li>
                <li> <Link to={"/a-propos"}>à propos</Link> </li>
                <li>
                    <Link to={"/"}>
                        <img src={logoB} alt=""/>
                    </Link>
                </li>
                <li> <Link to={"/mission"}>mission</Link> </li>
                <li> <Link to={"/accompagnement"}>Accompagnement</Link> </li>
            </ul>
        </nav>
    )
}
export default Nav;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DispatchContext, StateContext } from "../contexts";

import hamburger_img from '../image/Hamburger_icon.png'
import Logo from '../image/GameTeach_Logo.png'

const Header = () => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    const { userSignin: { userInfo } } = state;

    return (
        <header>
            <div class='brand'>
                <button class="hamburger"><img src={hamburger_img} alt="" /></button>
                <Link to="/" className='Logo'><img src={Logo} alt="" /></Link>
            </div>
            <div className="menu">
                <ul>
                    <Link to="/coursebook"><li class='menu_item'>預約課程</li></Link>
                    <Link to="/todayclass"><li class='menu_item'>我的課程</li></Link>

                    {userInfo ? (
                        <Link to="/" class='menu_item account_profile'>{userInfo.id}</Link>
                    ) : (
                            <Link to="/loginpage"><li class='menu_item login_btn'>登入</li></Link>
                        )}

                </ul>
            </div>
        </header>
    );
}

export default Header;
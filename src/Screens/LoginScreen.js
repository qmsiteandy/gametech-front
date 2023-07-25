import React, { useEffect, useState, useContext } from 'react';
import * as QueryString from "query-string";
import { StateContext, DispatchContext } from "../contexts"
import actionType from "../constants";

const LoginScreen = (props) => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const { userSignin } = useContext(StateContext);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useContext(DispatchContext);
    // const { redirect } = QueryString.parse(props.location.search);

    // useEffect(() => {
    //     if (userInfo) {
    //         props.history.push(redirect);
    //         console.log(redirect);
    //     }
    //     return () => {
    //         //
    //     };

    // }, [userInfo]); //重要，第二個引述陣列有更改時觸發useEffect

    //用來傳送Submit後的資料傳送
    const submitHandler = (e) => {
        if (id !== '' && password !== '') {
            e.preventDefault();
            dispatch({ type: actionType.USER_SIGNIN_SUCCESS, payload: { id, password } });

            props.history.push('/');
            alert("登入成功");
        }
        else{
            alert("帳號或密碼錯誤");
        }
    }

    return (
        <main>
            <div className='login_page'>
                <h1>GameTeach登入系統</h1>
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <label htmlFor="username">
                                帳號
                            </label>
                            <input type="username" name="username" id="username" onChange={(e) => setId(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="password">密碼</label>
                            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="primarybutton">登入</button>
                        </li>

                    </ul>
                </form>
                <div className='loginbuttom'>
                    <a href=''><h3>忘記密碼</h3></a> | <a href=''><h3>申請帳號</h3></a>
                </div>
            </div>

        </main>
    );
}
export default LoginScreen;
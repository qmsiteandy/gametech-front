import React, { Component } from 'react';

import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar'
import hotClass_img from '../image/map.jpg'
import hotTeacher_img from '../image/hotTeacher_img.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const ClassfinishedScreen = () => {
    return (
        <main>
            <div id="classfinishedbg">
                <div class="topplacetwo">
                    <ul>
                        <li>
                            <h1>我的課程</h1>
                        </li>
                        <li>
                            <div class="coursetypeone">
                                <div class="coursebuttontwo">
                                    <ul>
                                        <Link to="/todayclass"><li class="coursechoosetwo"><h3>今日上課</h3></li></Link>
                                        <Link to="/alreadybooked"><li class="coursechoosetwo"><h3>已報名課程</h3></li></Link>
                                        <Link to="/classfinished"><li class="coursechoosetwo"><h3>已完成課程</h3></li></Link>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="horizontalline"></div>
                    <div class="coursetypetwo">
                        <div class="coursebuttontwo">
                            <ul>
                                <li class="coursechoosetwo"><h3>課程總覽</h3></li>
                                <li class="coursechoosetwo"><h3>程式課程</h3></li>
                                <li class="coursechoosetwo"><h3>美術課程</h3></li>
                                <li class="coursechoosetwo"><h3>企劃課程</h3></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div class="course_info_finished">
                    <div class="coursetopic">
                        <h2>基礎C/C++程式設計</h2>
                    </div>
                    <div class="course_itemthree">
                        <div class="word">11/4(三) 17:00~20:00</div>
                        <p>
                            變數與資料型態
                        </p>
                        <p>
                            認識變數與常數，基本的資料型態，變數的命名原則與資料型態轉換。
                        </p>        
                        <a href="" class="readmore"><h3>回顧課程</h3></a>
                    </div>
                    <div class="course_itemthree">
                        <div class="word">11/4(三) 17:00~20:00</div>
                        <p>
                            變數與資料型態
                        </p>
                        <p>
                            認識變數與常數，基本的資料型態，變數的命名原則與資料型態轉換。
                        </p>        
                        <a href="" class="readmore"><h3>回顧課程</h3></a>
                    </div>
                    <div class="course_itemthree">
                        <div class="word">11/4(三) 17:00~20:00</div>
                        <p>
                            變數與資料型態
                        </p>
                        <p>
                            認識變數與常數，基本的資料型態，變數的命名原則與資料型態轉換。
                        </p>        
                        <a href="" class="readmore"><h3>回顧課程</h3></a>
                    </div>
                    <div class="course_itemthree">
                        <div class="word">11/4(三) 17:00~20:00</div>
                        <p>
                            變數與資料型態
                        </p>
                        <p>
                            認識變數與常數，基本的資料型態，變數的命名原則與資料型態轉換。
                        </p>        
                        <a href="" class="readmore"><h3>回顧課程</h3></a>
                    </div>
                    
                </div>
            </div>{/*-- introduce --*/}
            
        </main >
    );
}
export default ClassfinishedScreen;
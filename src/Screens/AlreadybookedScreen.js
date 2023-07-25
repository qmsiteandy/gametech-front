import React, { useEffect, useContext, Component } from 'react';
import actionType from "../constants";
import { StateContext, DispatchContext } from "../contexts";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chrono } from "react-chrono";
import AlreadyBookedItem from "../components/AlreadyBookedItem"
import Cookie from "js-cookie"

const AlreadybookedScreen = () => {

    const dispatch = useContext(DispatchContext);
    // const items = [{
    //     title: "May 1940",
    //     contentTitle: "Dunkirk",
    //     contentText:"Men of the British Expeditionary Force (BEF) wade out to..",
    //     media: {
    //       type: "IMAGE",
    //       source: {
    //         url: "http://someurl/image.jpg"
    //       }
    //     }
    //   }, ];

    const { ReserveItems } = useContext(StateContext);

    useEffect(() => {
        dispatch({ type: actionType.Reserve_INIT_ITEMS, payload: Cookie.getJSON("ReserveItems") });
        console.log("getCookie:" + ReserveItems)
    }, []);

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
                <div>
                    {ReserveItems ? (
                        <ul class="course_info_booked">
                            {
                                ReserveItems.map((courseData) => (
                                    <AlreadyBookedItem key={courseData.courseID} courseData={courseData} />
                                ))}
                        </ul>
                    ) : (
                            <h1>尚無預定課程</h1>
                        )
                    }


                </div>
            </div>{/*-- introduce --*/}

        </main >
    );
}
export default AlreadybookedScreen;
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar'
import actionType, { SERVER_URL } from "../constants";
import { StateContext, DispatchContext } from "../contexts";
import Cookie from "js-cookie"
import img from "../image/hotTeacher_img.jpg"

function CourseBook_Item({courseData}){

    const { ReserveItems } = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const AddThisToReserves = () => {
        dispatch({
            type: actionType.Reserve_ADD_ITEM,
            payload: {
                courseID: courseData.courseID,
                name: courseData.name,
                teacher: courseData.teacher,
                teacherImage: courseData.teacherImage,
                period: courseData.period,
                time: courseData.time,
                bookednum: courseData.bookednum,
                Upnum: courseData.Upnum,
            },
        });
    };

    useEffect(() => {
        Cookie.set("ReserveItems", JSON.stringify(ReserveItems));
        console.log("setCookie:" + ReserveItems)
      }, [ReserveItems])

    return (
        <div class="course_item">
            <div class="word">{courseData.name}</div>
            <ul>
                <li><img src={img} alt="teacherImg"/></li>
                <li>
                    <p>講師：{courseData.teacher}</p>
                    <p>{courseData.period}</p>
                    <p>{courseData.time}</p>
                </li>
            </ul>
            <div class="bar">
                <ul>
                    <li>
                        報名人數：{courseData.bookednum}
                </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                        人數上限：{courseData.Upnum}
                </li>
                </ul>
                <div class="progress_bar">
                    <ProgressBar now= {15} />
                </div>
            </div>
            <button onClick={AddThisToReserves} class="readmore"><h3>預定課程</h3></button>
        </div>
    );
}

export default CourseBook_Item;
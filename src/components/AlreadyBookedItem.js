import React, { useContext } from "react";
import actionType from "../constants";
import { StateContext, DispatchContext } from "../contexts";

const AlreadyBookedItem = ({ courseData }) => {

    const dispatch = useContext(DispatchContext);
    console.log(courseData.bookednum)

    const removeThisFromCart = () => {
        alert("已退出課程")
        dispatch({ type: actionType.Reserve_REMOVE_ITEM, payload: courseData.courseID });
    };

    return (
        <div class="coursebooked_item">
            <ul class="verticalline">
                <li><div class="date"><h3>{courseData.period}</h3></div></li>
                <li><div class="dot"></div></li>
            </ul>
            <div class="coursebooked_itemDetal">
                <div class="word">{courseData.time}</div>
                <ul>
                    <li>
                        <h3>{courseData.name}</h3>
                        <p>授課教師：{courseData.teacher}</p>
                        <p>課程期間：{courseData.period}</p>
                        <p>已報名人數：{courseData.bookednum}/{courseData.Upnum}</p>
                    </li>
                </ul>
                <ul>
                    <li class="bookedbutton"><a href="" class="readmore"><p>課程請假</p></a></li>
                    <li><button onClick={removeThisFromCart} class="readmore"><p>退出課程</p></button></li>
                </ul>
                
            </div>
        </div>
    );
}

export default AlreadyBookedItem;
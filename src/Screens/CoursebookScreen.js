import React, { useContext, useEffect } from 'react';
import CourseBook_Item from "../components/CourseBook_Item"
import { StateContext, DispatchContext } from "../contexts"
import actionType, { SERVER_URL } from "../constants";
import data from "../json/data.json"
import * as QueryString from "query-string";


const CoursebookScreen = () => {

    const { courses } = useContext(StateContext);
    const { items, loading, error } = courses;
    const dispatch = useContext(DispatchContext);

    useEffect(() => {
        async function fetchData() {
          try {
            dispatch({ type: actionType.BookClass_List_REQUEST });
            //const { data } = await axios.get(SERVER_URL + "/api/courses");
            dispatch({ type: actionType.BookClass_List_SUCCESS, payload: data });
          } catch (error) {
            dispatch({
              type: actionType.BookClass_List_FAIL,
              payload: error.message,
            });
          }
        }
        fetchData();
      }, []);

    return (
        <main>
            <div id="coursebookbg">
                <div class="topplace">
                    <ul>
                        <li>
                            <h1>預約課程</h1>
                            <h2>您是正式學員 可以自由加選課程</h2>
                        </li>
                        <li><div class="coursebutton">
                            <ul>
                                <li class="coursechoose"><h3>程式課程</h3></li>
                                <li class="coursechoose"><h3>美術課程</h3></li>
                                <li class="coursechoose"><h3>企劃課程</h3></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                </div>
                <div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <ul class="course_info">
                            {
                                data.map((courseData) =>(
                                    <CourseBook_Item key={courseData.courseID} courseData={courseData} />
                                )
                            )}
                        </ul>
                    )}

                </div>
            </div>{/*-- introduce --*/}

        </main >
    );
}
export default CoursebookScreen;
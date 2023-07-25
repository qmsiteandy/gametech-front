import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/HomeScreen";
import EmptyScreen from "../Screens/EmptyScreen";
import LoginScreen from "../Screens/LoginScreen";
import CoursebookScreen from "../Screens/CoursebookScreen";
import AlreadybookedScreen from "../Screens/AlreadybookedScreen";
import ClassfinishedScreen from "../Screens/ClassfinishedScreen";
import TodayclassScreen from "../Screens/TodayclassScreen";


const Main = () => {
   return (
     <main className="main">
       <div className="content">
         <Routes>
           <Route path="/" exact={true} element={<HomeScreen/>} />
           <Route path="/empty" element={<EmptyScreen/>} />
           <Route path="/loginpage" element={<LoginScreen/>} />
           <Route path="/coursebook" element={<CoursebookScreen/>} />
           <Route path="/todayclass" element={<TodayclassScreen/>} />
           <Route path="/alreadybooked" element={<AlreadybookedScreen/>} />
           <Route path="/classfinished" element={<ClassfinishedScreen/>} />
         </Routes>
       </div>
     </main>
   );
}

export default Main;
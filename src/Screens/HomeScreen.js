import React, { Component } from 'react';

import hotClass_img from '../image/map.jpg'
import hotTeacher_img from '../image/hotTeacher_img.jpg'


const HomeScreen = () => {
    return (
        <main>
            <div id='title'></div>{/*-- 圖片區域 --*/}
            <div id="introduce" className='homescreen_div'>
                <h1>特色介紹</h1>
                <div class="intro_info">
                    <div class="intro_item">
                        <h2>1.內容多元精彩又有趣</h2>
                        <h3>線上互動機制，創造知識技能與觀點的有效流動，完課還可領完課證明！</h3>
                    </div>
                    <div class="intro_item">
                        <h2>2.隨時複習上過的課程內容</h2>
                        <h3>保留課程的直播錄像，課後仍可開啟影片觀看複習。不受時間地點限制，讓你輕鬆快樂地累積知識技能！</h3>
                    </div>
                    <div class="intro_item">
                        <h2>3.優質的師資陣容</h2>
                        <h3>師資經過嚴格把關，皆為各領域的翹楚</h3>
                    </div>
                    <div class="intro_item">
                        <h2>4.漸進式學習</h2>
                        <h3>依照已學習過的課程，推薦後續可修習的課程</h3>
                    </div>
                    <div class="intro_item">
                        <h2>5.主題式學習</h2>
                        <h3>主題式的學習，讓學生可以完整學習遊戲的製作(企劃程式美術)</h3>
                    </div>
                    <div class="intro_item">
                        <h2>6.即時問題解答</h2>
                        <h3>在課程進行中，對內容有問題可以直接提出，授課教師會即時解答</h3>
                    </div>
                </div>
            </div>{/*-- introduce --*/}
            <div id="hotClass" className='homescreen_div'>
                <h1>本季熱門課程</h1>
                <div class="hotClass_contents">
                    <a href="" className='hotClass_item'>
                        <img src={hotClass_img} />
                        <h2>課程系列A</h2>
                    </a>
                    <a href="" className='hotClass_item'>
                        <img src={hotClass_img} />
                        <h2>課程系列A</h2>
                    </a>
                    <a href="" className='hotClass_item'>
                        <img src={hotClass_img} />
                        <h2>課程系列A</h2>
                    </a>
                    <a href="" className='hotClass_item'>
                        <img src={hotClass_img} />
                        <h2>課程系列A</h2>
                    </a>
                    <a href="" className='hotClass_item'>
                        <img src={hotClass_img} />
                        <h2>課程系列A</h2>
                    </a>
                    <a href="" className='hotClass_item'>
                        <img src={hotClass_img} />
                        <h2>課程系列A</h2>
                    </a>
                </div>
                <a href="" class="readmore"><h3>Read More</h3></a>
            </div>
            <div id="hotTeacher" className='homescreen_div'>
                <h1>本季熱門講師</h1>
                <div class="hotTeacher_contents">
                    <div className='hotTeacher_item'>
                        <img src={hotTeacher_img} />
                        <div className = 'hotTeacher_itemIntro'>
                            <h2>講師：高老師     <br/>課程：寫出有趣的遊戲企劃     <br/>累計修課人數：1000</h2>
                            <h3>課程簡介：帶入多款市面遊戲，透過分析找出設計的共同點，進而發想出有趣的新遊戲。</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div id="QA" className='homescreen_div'>
                <h1>常見問題</h1>
                <div class='QA_div'>
                    <a href="#" class="QA_item"><h3>Q:怎麼請假</h3></a>
                    <a href="#" class="QA_item"><h3>Q:是否有分期付款</h3></a>
                    <a href="#" class="QA_item"><h3>Q:課程有效期限</h3></a>
                    <a href="" class="readmore"><h3>Read More</h3></a>
                </div>
            </div> {/*--QA --*/}
        </main >
    );
}
export default HomeScreen;
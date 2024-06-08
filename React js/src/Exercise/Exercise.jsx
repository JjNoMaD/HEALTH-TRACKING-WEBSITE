// import React from 'react';
// import './Login_Header.css';
// import './exercise.css';
// import './footer.css';



// const Exercise = () => {
//   return (
//     <div>
//       <div className="top_nav_bar">
//         <div className="top_nav_bar_contents">
//           <a href="http://www.myfitnesspal.com/" target="blank" rel="noopener noreferrer">
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg46YnazfFyxHMhbsh3UkIUkb3IhlbcjHVbQQnyTF5Iw&s" alt="under armour" />
//             <p style={{ fontWeight: 800 }}>Healthmate</p>
//           </a>
//         </div>
//       </div>

//       <div className="header_wrap">
//         <div className="header_content">
//           <p>Hi,<a id="user_name" style={{ marginLeft: 10 }}>username</a></p>
//           <div className="header_wrap_content">
//             <div className="icons"><img src="data:image/png;base64,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"alt = "user"/></div>
//             <div className="message"><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5-ACdx9CAJYIT4x86KYaEzE1wJfsKBBv_g&usqp=CAU" alt="message" /></a></div>
//             <div style={{ backgroundColor: 'tomato', borderRadius: 5, height: 15, width: 15, marginTop: 7 }}><p style={{ color: 'white', textAlign: 'center' }}></p></div>
//             <div style={{ backgroundColor: 'grey', borderRadius: 5, height: 15, width: 15, marginTop: 7 }}><p style={{ color: 'white', textAlign: 'center' }}></p></div>
//             <a href="#">Help</a>
//             <a href="#">Settings</a>
//             <a href="../Loginpage/Login.html">Logout</a>
//             <a href="#">Follow us :</a>
//             <div className="icons"><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffWo3TdZd-FULexnuI7vbB0WoSGhco7Xeeg&usqp=CAU" alt="facebook" /></a></div>
//             <div style={{ width: 20, height: 20 }}><a href="#"><img className="icons" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpL-VV2vY_owK7QPN2rM9205Ld_RHgH_SDw&usqp=CAU" alt="twitter" style={{ marginBottom: 15 }} /></a></div>
//           </div>
//         </div>
//       </div>

//       <div className="header__navigation_bar">
//         <a href="C:\\Users\\jaith\\OneDrive\\Desktop\\uid\\Find-Your-Fit\\My_Fitness_Pal_Clone\\MY HOME">MY HOME</a>
//         <a href="../Food_page/food.html" target="blank">FOOD</a>
//         <a href="../Exercise page/exercise.html">EXERCISES</a>
//         <a href="C:\\Users\\jaith\\OneDrive\\Desktop\\uid\\Find-Your-Fit\\My_Fitness_Pal_Clone\\MY HOME\\my-home.html">REPORTS</a>
//         <a href="#">APPS</a>
//         <a href="#">COMMUNITY</a>
//         <a href="#">BLOG</a>
//         <img src="https://d34yn14tavczy0.cloudfront.net/images/ua_shop_logo.png" alt="shop" height="20" width="20" style={{ marginTop: 10 }} />
//         <a href="#">SHOP</a>
//         <a href="#">PREMIUM</a>
//       </div>

//       <div className="header__navigation_sub_bar">
//         <a style={{ marginLeft: 210 }} href="#">Exercise Diary</a>
//         <a href="#">Database</a>
//         <a href="#">My Exercises</a>
//         <a href="#">Settings</a>
//       </div>

//       <div className="exercise">
//         <div className="food_firstDiv">
//           <h1>Your Food Diary For :</h1>
//           <button className="button_prev" id="prev_button"><img src="prev_arrow.png" alt="previous" height="20" width="20" /></button>
//           <p className="food_firstDiv_date" id="date">Saturday, 2 January 2021</p>
//           <button className="button_prev" id="next_button"><img src="right arrow.png" alt="next" height="20" width="20" /></button>
//           <div id="calender" style={{ position: 'relative' }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-CTz2j_sMgAmRO4uxILnUgoXJ9JJ7vCD_Ng&usqp=CAU" alt="calender" height="50" width="50" /></div>
//         </div>
        
      

// export default Exercise;
import React from 'react';
import './Login_Header.css';
import './exercise.css';
import './footer.css';

// Import images
import prevArrowImage from './prev_arrow.png';
import rightArrowImage from './right arrow.png';
import calenderImage from './calender.jpg';
import userImage from './user.jpg';
import messageImage from './message.jpg';
import facebookImage from './facebook.png';
import twitterImage from './twitter.png';


const Exercise = () => {
  return (
    <div>
      <div className="top_nav_bar">
        <div className="top_nav_bar_contents">
          <a href="http://www.myfitnesspal.com/" target="blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg46YnazfFyxHMhbsh3UkIUkb3IhlbcjHVbQQnyTF5Iw&s" alt="under armour" />
            <p style={{ fontWeight: 800 }}>Healthmate</p>
          </a>
        </div>
      </div>

      <div className="header_wrap">
        <div className="header_content">
        <p>Hi,<a id="user_name" style={{ marginLeft: 10 }}>username</a></p>
          <div className="header_wrap_content">
            <div className="icons"><img src={userImage} alt="user" /></div>
            <div className="message"><a href="#"><img src={messageImage} alt="message" /></a></div>
            <div style={{ backgroundColor: 'tomato', borderRadius: 5, height: 15, width: 15, marginTop: 7 }}><p style={{ color: 'white', textAlign: 'center' }}></p></div>
            <div style={{ backgroundColor: 'grey', borderRadius: 5, height: 15, width: 15, marginTop: 7 }}><p style={{ color: 'white', textAlign: 'center' }}></p></div>
            <a href="#">Help</a>
            <a href="#">Settings</a>
            <a href="../Loginpage/Login.html">Logout</a>
            <a href="#">Follow us :</a>
            <div className="icons"><a href="#"><img src={facebookImage} alt="facebook" /></a></div>
            <div style={{ width: 20, height: 20 }}><a href="#"><img className="icons" src={twitterImage} alt="twitter" style={{ marginBottom: 15 }} /></a></div>
          </div>
        </div>
      </div>

      <div className="header__navigation_bar">
        <a href="C:\\Users\\jaith\\OneDrive\\Desktop\\uid\\Find-Your-Fit\\My_Fitness_Pal_Clone\\MY HOME">MY HOME</a>
        <a href="../Food_page/food.html" target="blank">FOOD</a>
        <a href="../Exercise page/exercise.html">EXERCISES</a>
        <a href="C:\\Users\\jaith\\OneDrive\\Desktop\\uid\\Find-Your-Fit\\My_Fitness_Pal_Clone\\MY HOME\\my-home.html">REPORTS</a>
        <a href="#">APPS</a>
        <a href="#">COMMUNITY</a>
        <a href="#">BLOG</a>
        <img src="https://d34yn14tavczy0.cloudfront.net/images/ua_shop_logo.png" alt="shop" height="20" width="20" style={{ marginTop: 10 }} />
        <a href="#">SHOP</a>
        <a href="#">PREMIUM</a>
      </div>

      <div className="header__navigation_sub_bar">
        <a style={{ marginLeft: 210 }} href="#">Exercise Diary</a>
        <a href="#">Database</a>
        <a href="#">My Exercises</a>
        <a href="#">Settings</a>
      </div>

      <div className="exercise">
        <div className="food_firstDiv">
          <h1>Your Food Diary For :</h1>
          <button className="button_prev" id="prev_button"><img src={prevArrowImage} alt="previous" height="20" width="20" /></button>
          <p className="food_firstDiv_date" id="date">Saturday, 2 January 2021</p>
          <button className="button_prev" id="next_button"><img src={rightArrowImage} alt="next" height="20" width="20" /></button>
          <div id="calender" style={{ position: 'relative' }}><img src={calenderImage} alt="calender" height="50" width="50" /></div>
        </div>
        <div id="main_calender"></div>
        <div className="line"></div>
        <table>
          <tr className="meal_header">
            <td className="td_first">Cardiovascular</td>
            <td className="td_first_column"><div>Minutes</div></td>
            <td className="td_first_column"><div>Calories Burned</div></td>
          </tr>
        </table>
        <table id="show_exercise_info" className="exercise_info_table"></table>
        <table>
          <tr className="bottom">
            <td className="bottom_td"><a href="add_exercise.html" target="blank">Add exercises</a></td>
            <td className="bottom_td"><a href="#">Quick Tools</a></td>
          </tr>
        </table>
        <div className="line"></div>
        <table className="table_total">
          <tr>
            <td className="total_value"><p style={{ fontWeight: 'bold', fontSize: 14 }}>Daily Total /</p><p style={{ color: '#00548F', fontSize: 14 }}>Goal</p></td>
            <td className="total_text"><p id="daily_total_km" style={{ fontWeight: 'bold', fontSize: 14, float: 'left' }}>0 /</p><p style={{ color: '#00548F', fontSize: 14, float: 'left' }}>0</p></td>
            <td className="total_text"><p id="daily_total_cal" style={{ fontWeight: 'bold', fontSize: 14, float: 'left' }}>0 /</p><p style={{ color: '#00548F', fontSize: 14, float: 'left' }}>0</p></td>
          </tr>
          <tr>
            <td className="total_value"><p style={{ fontWeight: 'bold', fontSize: 14 }}>Weekly Total /</p><p style={{ color: '#00548F', fontSize: 14 }}>Goal</p></td>
            <td className="total_text"><p id="weekly_total_km" style={{ fontWeight: 'bold', fontSize: 14, float: 'left' }}>0 /</p><p style={{ color: '#00548F', fontSize: 14, float: 'left' }}>0</p></td>
            <td className="total_text"><p id="weekly_total_cal" style={{ fontWeight: 'bold', fontSize: 14, float: 'left' }}>0 /</p><p style={{ color: '#00548F', fontSize: 14, float: 'left' }}>0</p></td>
          </tr>
        </table>
        <table>
          <tr className="meal_header">
            <td className="td_first">Strength Training</td>
            <td className="td_second_column"><div>Sets</div></td>
            <td className="td_second_column"><div>Reps/Sets</div></td>
            <td className="td_second_column"><div>Weight/Sets</div></td>
          </tr>
        </table>
        <table>
          <tr className="bottom">
            <td className="bottom_td"><a href="add_exercise.html" target="blank">Add exercises</a></td>
            <td className="bottom_td"><a href="#">Quick Tools</a></td>
          </tr>
        </table>
        <div className="line"></div>
        <div className="line"></div>
        <div className="exercise__note_container">
          <div style={{ display: 'flex' }}>
            <p style={{ fontSize: 14, fontWeight: 700 }}>Today's Exercises Notes</p>
            <a style={{ color: '#00548F', marginLeft: 520, fontSize: 14, fontWeight: 700, marginTop: 10 }}>Edit Notes</a>
          </div>
          <textarea rows="6" cols="120" style={{ border: '2px solid silver' }}></textarea>
        </div>
        <div className="line"></div>
      </div>
      <div className="footer">
        <div className="footer_child">
          <div style={{ marginBottom: 10, color: 'black', fontWeight: 'bold', fontSize: 18 }}>HEALTHY LIVING</div>
          <a href="#">Blog</a>
          <a href="#">Nutrition</a>
          <a href="#">Fitness</a>
          <a href="#">Recipes</a>
          <a href="#">Inspiration</a>
          <a href="#">MyFitnessPal</a>
        </div>
        <div className="footer_child">
          <div style={{ marginBottom: 10, color: 'black', fontWeight: 'bold', fontSize: 18 }}>APPS</div>
          <a href="#">myfitnesspal</a>
          <a href="#">Pacer</a>
          <a href="#">MapMyFitness</a>
          <a href="#">FitBit</a>
          <a href="#">Sworkit</a>
        </div>
        <div className="footer_child">
          <div style={{ marginBottom: 10, color: 'black', fontWeight: 'bold', fontSize: 18 }}>MYFITNESSPAL</div><br></br>
          <a href="#">Premium</a>
          <a href="#">Plans</a>
          <a href="#">Help</a>
          <a href="#">Forums</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer_child">
          <div style={{ marginBottom: 10, color: 'black', fontWeight: 'bold', fontSize: 18, marginRight: 10}}>FOLLOW US</div>
          <div className="icons"><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffWo3TdZd-FULexnuI7vbB0WoSGhco7Xeeg&usqp=CAU" alt="facebook" /></a></div>
          <div className="icons"><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREpL-VV2vY_owK7QPN2rM9205Ld_RHgH_SDw&usqp=CAU" alt="twitter" /></a></div>
          <div className="icons"><a href="#"><img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" alt="instagram" /></a></div>
        </div>
      </div>
    </div>
  );
}

export default Exercise;


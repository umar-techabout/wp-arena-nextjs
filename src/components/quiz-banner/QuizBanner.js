import Image from 'next/image'
import React from 'react';
import QuizBannerImg from "../../images/quiz-banner.png";
import "./QuizBanner.css";
const QuizBanner = () => {
  return (
    <>
      <section>
        <div className='wpa-quiz-banner wpa-wrapper-sides-spacing wpa-content-top-bottom-spacing-30'>
         <div className='wpa-flex wpa-gap-xxl'>
         <div className='wpa-quiz-thumnail'>
            <Image src={QuizBannerImg} alt='quiz banner icon' />
          </div>
          <div className="wpa-quiz-content wpa-h2-font-size wpa-paragraph-text btn-dark btn-primary-hover wpa-content-top-bottom-spacing wpa-font-weight-600">
            <h2>Which WordPress Hosting is Best for You?</h2>
            <p>Unsure which WordPress hosting company to choose? Simply answer a few questions, and our recommendation engine will identify the best option for you.</p>
            <ul>
              <li>It is a long established fact that a reader will be distracted by the readable content of a page.</li>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
            </ul>
            <button type='button'>TAKE THE QUIZ</button>
          </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default QuizBanner

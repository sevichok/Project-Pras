import React from 'react'
import NewsItem from './NewsItem'
import NewsItemBg from './NewsItemBg'
import Img from "./../../images/img_ski.png"
import Img2 from "./../../images/img_ski2.png"
import { Text3, Text15, Text16, Text17, Text18, Text19 } from '../../text/TextConstants'
import Comments from '../Comments'

function Main() {
  return (
    <div className='main'>
      <div className='main_head_text'>
        <h4>{Text3}</h4>
      </div>
      <div className='main_news'>
        <NewsItem img={Img} hashtag={Text15} date={Text18} />
        <NewsItem img={Img2} hashtag={Text16} date={Text19} />
      </div>
      <div className='main_news'>
        <NewsItemBg hashtag={Text17} date={Text19} />
        <NewsItem img={Img} hashtag={Text15} date={Text18} />
      </div>
      <Comments />
      <div className='main_news'>
        <NewsItem img={Img} hashtag={Text16} date={Text19} />
        <NewsItemBg hashtag={Text17} date={Text19} />
      </div>
    </div>
  )
}

export default Main
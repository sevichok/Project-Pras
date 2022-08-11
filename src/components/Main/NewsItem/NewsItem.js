import React from 'react'
import { Text4, Text5 } from '../../../text/TextConstants'

function NewsItem({ img, hashtag, date }) {
  return (
    <div className='news_item_wrapper' >
      <div className='news_img' >
        {img && <img src={img} alt=''></img>}
      </div>
      <div className='news_textarea'>
        <div className='textarea_hashtag'>
          <h6 className='textarea_date'>{date}</h6>
          <h6 className='textarea_tag'>{hashtag}</h6>
        </div>
        <h2 className='text_title'>{Text4}</h2>
        <h4 className='text_article'>{Text5}</h4>
      </div>
    </div>
  )
}

export default NewsItem
import React from 'react'
import { Text4, Text5 } from '../../../text/TextConstants'

function NewsItemBg({ img, hashtag, date }) {
  return (
    <div className='news_item_bg_wrapper' >
      <div className='news_img' >
        {img && <img src={img} alt=''></img>}
      </div>
      <div className='news_textarea_bg'>
        <div className='textarea_hashtag_bg'>
          <h6 className='textarea_date_bg'>{date}</h6>
          <h6 className='textarea_tag_bg'>{hashtag}</h6>
        </div>
        <h2 className='text_title_bg'>{Text4}</h2>
        <h4 className='text_article_bg'>{Text5}</h4>
      </div>
    </div>
  )
}

export default NewsItemBg
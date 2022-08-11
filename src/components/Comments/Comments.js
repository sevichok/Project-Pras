import React from 'react'
import { Text6, Text7, Text8, Text9 } from '../../text/TextConstants'

function Comments() {
    return (
        <div className='main_comments'>
            <div className='main_comments_row'>
                <div className='comment_area'>
                    <div className='comment_photo_area_small'></div>
                    <div className='comment_photo_area1'></div>
                    <div className='comment_text_area'>
                        <h3 className='first_text_comment'>{Text9}</h3>
                        <h4 className='second_text_comment'>{Text8}</h4>
                        <h3 className='third_text_comment'>{Text6}</h3>
                    </div>
                </div>
                <div className='comment_area'>
                    <div className='comment_photo_area_small'></div>
                    <div className='comment_photo_area2'></div>
                    <div className='comment_text_area'>
                        <h3 className='first_text_comment'>{Text9}</h3>
                        <h4 className='second_text_comment'>{Text8}</h4>
                        <h3 className='third_text_comment'>{Text7}</h3>
                    </div>
                </div>
            </div>
            <div className='main_comments_row'>
                <div className='comment_area'>
                    <div className='comment_photo_area_small_z'></div>
                    <div className='comment_photo_area3'></div>
                    <div className='comment_text_area'>
                        <h3 className='first_text_comment'>{Text9}</h3>
                        <h4 className='second_text_comment'>{Text8}</h4>
                        <h3 className='third_text_comment'>{Text6}</h3>
                    </div>
                </div>
                <div className='comment_area'>
                    <div className='comment_photo_area_small'></div>
                    <div className='comment_photo_area1'></div>
                    <div className='comment_text_area'>
                        <h3 className='first_text_comment'>{Text9}</h3>
                        <h4 className='second_text_comment'>{Text8}</h4>
                        <h3 className='third_text_comment'>{Text7}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
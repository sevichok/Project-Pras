import React from 'react'
import BannerContacts from "./BannerContacts"
import {Text15, Text10, Text2, Text11} from "../../text/TextConstants"

function Banners() {
    return (
        <div className='banner'>
            <div className='banner_main_first' >
                <div className='banner_main_text'>
                    <h6>{Text15}</h6>
                    <h2>{Text2}</h2>
                </div>
            </div>
            <BannerContacts />
            <div className='banner_main_second' >
                <div className='banner_main_text'>
                    <h2 style={{paddingBottom:"20px"}}>{Text11}</h2>
                    <h5>{Text10}</h5>
                </div>
            </div>
        </div>
    )
}

export default Banners
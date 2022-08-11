import React from 'react'
import vk from "../../images/vk2.png"
import facebook from "../../images/facebook2.png"
import instagram from "../../images/instagram2.png"
import youtube from "../../images/youtube2.png"
import telegram from "../../images/telegram2.png"
import tiktok from "../../images/tiktok2.png"
import twitter from "../../images/twitter2.png"
import Logo from "../../images/logo.png"
import Group from "../../images/Group.png"

function Footer() {
    return (
        <div className='footer'>
            <div className='section_info'>
                <a href='!#'>
                    <img src={Logo} alt=""></img>
                </a>
                <a href='!#'>
                    <h5 className='footer_info_h5'>о проекте</h5></a>
                <a href='!#'>
                    <h5 className='footer_info_h5'>обратная связь</h5></a>
                <a href='!#'>
                    <h5>Реклама:</h5>
                    <h6>ads@sporthub.news</h6></a>
            </div>
            <div className='section_links'>
                <div className='link_vk'><img src={vk} alt=""></img></div>
                <div className='link_fb'><img src={facebook} alt=""></img></div>
                <div className='link_inst'><img src={instagram} alt=""></img></div>
                <div className='link_yt'><img src={youtube} alt=""></img></div>
                <div className='link_tg'><img src={telegram} alt=""></img></div>
                <div className='link_tt'><img src={tiktok} alt=""></img></div>
                <div className='link_tw'><img src={twitter} alt=""></img></div>
            </div>
            <div className='section_signs'>
                <div className='first_sign'>
                    <h6>© 2022 «Спортхаб»</h6>
                </div>
                <div className='second_sign'>
                    <a href='!#'>
                        <img src={Group} alt=""></img>
                    </a>
                    <h6>Разработка сайта — компания PRAS</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer
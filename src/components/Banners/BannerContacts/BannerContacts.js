import React from 'react'
import vk from "../../../images/vk.png"
import facebook from "../../../images/facebook.png"
import instagram from "../../../images/instagram.png"
import youtube from "../../../images/youtube.png"
import telegram from "../../../images/telegram.png"
import tiktok from "../../../images/tiktok.png"
import twitter from "../../../images/twitter.png"

function BannerContacts() {
  return (
    <div className='banner_contacts_wrapper'>
      <div className='banner_contacts_network'>
        <h3 className='contacts_label'>СОЦСЕТИ</h3>
        <div className='banner_contacts'>
          <div className='banner_section_links'>
            <div className='link_vk'><img src={vk} alt=""></img></div>
            <div className='link_fb'><img src={facebook} alt=""></img></div>
            <div className='link_inst'><img src={instagram} alt=""></img></div>
            <div className='link_yt'><img src={youtube} alt=""></img></div>
            <div className='link_tg'><img src={telegram} alt=""></img></div>
            <div className='link_tt'><img src={tiktok} alt=""></img></div>
            <div className='link_tw'><img src={twitter} alt=""></img></div>
          </div>
        </div>
      </div>

      <div className='banner_email_subscribe'>
        <h3 className='contacts_label'>ПОДПИСКА</h3>
        <div className='banner_email'>
          <input className='banner_email_input' placeholder='Введите ваш email'></input>
          <button className='banner_email_button'>Подписаться</button>
        </div>
      </div>

    </div>
  )
}

export default BannerContacts
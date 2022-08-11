import React, { useState } from 'react'
import Logo from "../../images/logo.png"
import { Text1 } from '../../text/TextConstants'

function Header() {

  const [popup, setPopup] = useState(false)

  const handlerClick = (e) => {
    e.preventDefault()
    setPopup(cur => !cur)
  }

  return (
    <div className='header'>
      <div className='header_main' >
        <div className='header_main_info'>
          <div className='header_main_logo'>
            <a href='!#'>
              <img src={Logo} alt=""></img>
            </a>
          </div>
          <div className='header_main_menu'>
            <div className='header_main_open_menu'>
              <a href='!#'>
                <h5>REVIEW</h5></a>
              <a href='!#'>
                <h5>ЭКСТРИМ</h5></a>
              <a href='!#'>
                <h5>ЛЕГЕНДЫ</h5></a>
              <a href='!#'>
                <h5>ЗОЖ И ТУРИЗМ</h5></a>
              <a href='!#'>
                <h5>ПОЗIРК</h5></a>
              <a href='!#'>
                <h5>ТРЕШ</h5></a>
            </div>
            <a href='!#' className='burger' onClick={handlerClick}>
              <span className='line'></span>
              <span className='line'></span>
            </a>
          </div>
        </div>
      </div>
      <div className={popup ? 'popup_open' : "popup"}>
        <div className='nav_popup'>
          <a href='!#' className='burger' onClick={handlerClick}>
            <span className='line'></span>
            <span className='line'></span>
          </a>
        </div>
        <div className='nav_popup_menu'>
          <a href='!#'>
            <h5>REVIEW</h5></a>
          <a href='!#'>
            <h5>ЭКСТРИМ</h5></a>
          <a href='!#'>
            <h5>ЛЕГЕНДЫ</h5></a>
          <a href='!#'>
            <h5>ЗОЖ И ТУРИЗМ</h5></a>
          <a href='!#'>
            <h5>ПОЗIРК</h5></a>
          <a href='!#'>
            <h5>ТРЕШ</h5></a>
        </div>
      </div>
      <div className='header_main_banner'>
        <div className='header_main_banner_text'>
          <h6 className='text_tag'>{Text1}</h6>
          <h1 className='text_comment'>Юрий Поклад: «Динамо»<br />как бы начинает работать заново</h1>
        </div>
      </div>
      <div className='header_bottom_menu'>
        <a href='!#'>
          <h5>Футбол</h5></a>
        <a href='!#'>
          <h5>Хоккей</h5></a>
        <a href='!#'>
          <h5>Биатлон</h5></a>
        <a href='!#'>
          <h5>Теннис</h5></a>
        <a href='!#'>
          <h5>Гандбол</h5></a>
        <a href='!#'>
          <h5>Баскетбол</h5></a>
        <a href='!#'>
          <h5>Бокс</h5></a>
        <a href='!#'>
          <h5>Легкая атлетика</h5></a>
        <a href='!#'>
          <h5>Другое</h5></a>
      </div>
    </div >
  )
}

export default Header
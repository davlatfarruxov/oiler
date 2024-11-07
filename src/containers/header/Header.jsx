import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/main-banner.jpg'


const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Oiler.uz bilan yanada osonroq</h1>
        <p className=''>Bizning xizmatlarimiz orqali moy almashtirish shaxobchalaringizni avtomatlashtiring</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Elektron pochtangiz' />
          <button type='button'>Yuborish</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1.600 dan ortiq muvaffaqqiyatli mijozlar</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header


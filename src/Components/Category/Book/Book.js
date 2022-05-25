import React from 'react'

function Book() {
  return (
    <div className='book'>
        <div className='container'>
            <div className='book__inner'>
                <div className='book__img-box'>
                    <img className='book__img' src=""/>
                </div>
                <div className='book__info'>
                    <h2 className='book__title'>Qo’rqma</h2>
                   <ul className='book__list'>
                       <li className='book__item'>
                           <p className='book__item-text'>Sahifalar soni:</p>
                           <p className='book__item-num'>376</p>
                       </li>
                       <li className='book__item'>
                           <p className='book__item-text'>Chop etilgan:</p>
                           <p className='book__item-num'>2021</p>
                       </li>
                       <li className='book__item'>
                           <p className='book__item-text'>Janri:</p>
                           <p className='book__item-num'>Tarixiy</p>
                       </li>
                       <li className='book__item'>
                           <p className='book__item-text'>Nashriyot</p>
                           <p className='book__item-num'>Nihol nashr</p>
                       </li>
                   </ul>
                   <div className='book__mal-box'>
                       <p className='book__mal'>To’liq ma’lumot</p>
                       <i class='bx bx-down-arrow-alt'></i>
                       <div className='book__line'></div>
                   </div>
                   <p className='book__text-info'>
                   Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади. 
                    <br></br>
                    Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
                   </p>
                   <p className='book__form'>Mavjud formatlar</p>
                   <div>
                   <ul className='book__form-list'>
                       <li className='book__form-item'>
                            <i class='bx bxs-card'></i>
                            <p className='book__form-title'>Qog’oz kitob</p>
                            <p className='book__form-price'>27 000 so’m</p>
                       </li>
                       <li className='book__form-item'>
                            <i class='bx bxs-card'></i>
                            <p className='book__form-title'>Qog’oz kitob</p>
                            <p className='book__form-price'>27 000 so’m</p>
                       </li>
                       <li className='book__form-item'>
                            <i class='bx bxs-card'></i>
                            <p className='book__form-title'>Qog’oz kitob</p>
                            <p className='book__form-price'>27 000 so’m</p>
                       </li>
                   </ul>
                   <button className='book__form-btn'>Javonga qo’shish </button>
                   </div>
         
                </div>
            </div>
            <div>
                <ul className='book__nav-list'>
                    <li className='book__nav-item'>
                       Muallif haqida
                    </li>
                    <li className='book__nav-item'>
                       Muallif haqida
                    </li>
                    <li className='book__nav-item'>
                       Muallif haqida
                    </li>
                </ul>
                <div className='book__inner-box'>
                    <div>
                            <i class='bx bxs-quote-alt-left'></i>
                            <p className='book__inner-text'>      
                                    Inson bolasi ne kunlarni ko‘rmaydi?!
                                    Har bir odam o‘z g‘ami bilan bo‘lsa, hayotdan ko‘z yumib ketganlarga umr bo‘yi motam tutib o‘tsa, bu moddiy olam shu kunlarga yetolarmidi?
                                    Hayot to‘lqini ojizlarni qirg‘oqqa irg‘itib tashlaydi. Oqimga qarshi suza olganlar, to‘lqinni egarlaganlargina ertangi kunga yetib keladi.
                            </p>
                            <div className='book__share'>
                                <i class='bx bxs-heart'></i>
                                <i class='bx bxs-share-alt'></i>
                            </div>

                    </div>
                    <div>
                            <i class='bx bxs-quote-alt-left'></i>
                            <p className='book__inner-text'>      
                                   Yer kurrasida chumolidek mehnat qilayotganlardan ko‘ra, tuproq tagida yotganlar ko‘p. Yer qatlami odam suyaklariga to‘lib ketgan.
                            </p>
                    </div>
                </div>
                <div className='book__link-box'>
                    <p className='book__link'>Sizga yoqishi mumkin</p>
                    <p className='book__other-link'>Barchasini ko’rish</p>
                </div>
                <div>
                    <ul className='book__book-list'>
                        <li className='book__book-item'>
                            <img className='book__book-img' src=""/>
                                <h3 className='book__book-title'>Dunyoning ishlari</h3>
                                <div className='book__book-inner'>
                                    <i class='bx bxs-star'></i>
                                    <p className='book__book-num'>4.1 • 3400 ta fikrlar</p>
                                </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Book
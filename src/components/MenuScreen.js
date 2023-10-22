import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

export default function MenuScreen() {
  useEffect((first) => { console.log('menu画面') })

  function showMsg(msg) {
    alert(msg)
  }

  return (
    <div className='menu-div'>
      <Link className="green-btn-link" to="/inspection">検品</Link>
      <Link className="green-btn-link" to="/inspection2" onClick={() => { showMsg('検品２') } }>検品２</Link>
      <Link className="green-btn-link" to="#" onClick={() => { showMsg('実績') } }>実績</Link>
      <Link className="green-btn-link footer-area" to="#" onClick={() => { showMsg('戻る') } }>戻る</Link>
    </div>
  )
}


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

export default function InspectionScreen() {
  useEffect((first) => { console.log('menu画面') })

  return (
    <div>
      <h1>検品画面</h1>
      <label>番号入力</label>
      <input type="text" />
      <button className="green-button" onClick={() => alert('開始')}>開始</button>
      <Link className='green-button' to="/">戻る</Link>
    </div>
  )
}

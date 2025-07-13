import React from 'react'
import { useNavigate } from 'react-router-dom';


function Logo() {

  const navigate = useNavigate()

  return (
    <div class="logo-wrapper" onClick={() => navigate('/')}>
    <div class="logo-box">
      <div class="logo-inner">
        <div class="box-front">&lt;/&gt;</div>
        <div class="box-back">DL</div>
      </div>
    </div>

    <h1 class="brand-text text-3xl">
      Dev<span class="font-light glow-text">Link</span>
    </h1>
  </div>
  )
}

export default Logo
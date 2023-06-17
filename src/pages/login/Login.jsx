import React from 'react'
import style from "./Login.module.css"

function Login() {
  return (
    <div className={style.login}>
        <div className={style.Lfing}></div>
        <div className={style.Lwelcome}></div>
        <div className={style.Lpass}>
            <div className={style.LPcode}></div>
            <div className={style.LPkeypad}></div>
        </div>
      
    </div>
  )
}

export default Login

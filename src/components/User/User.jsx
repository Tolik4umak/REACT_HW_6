import React from 'react'
import s from './style.module.css'

export default function User({id, name, gender, age, avatar}) {
  return (
    <div className={s.user}>
        <div className={s.avatar}>
          <img src={avatar} alt="" />
        </div>
        <p className={s.name}>Name: {name}</p>
        <p className={s.age}>Age: {age}</p>
    </div>
  )
}

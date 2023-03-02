import React from 'react'
import { useSelector } from 'react-redux'
import User from '../User/User'
import s from './style.module.css'

export default function UsersList() {


  const users = useSelector(state => state.users)

  const man = users.filter(({gender}) => gender === 'm')
  const weman = users.filter(({gender}) => gender === 'f')


  return (
    <div className={s.container}>
        <div className={s.user_box}>
            <h2 className={s.title}>MAN</h2>
            <div className={s.users_list}>
                {man.length > 0 ? (
                    man.map(user => <User key={user.id} {...user}/>)
                ):('')}
            </div>
        </div>
        <div  className={s.user_box}>
            <h2 className={s.title}>WEMAN</h2>
            <div className={s.users_list}>
                {weman.length > 0 ? (
                    weman.map(user => <User key={user.id} {...user}/>)
                ):('')}
            </div>
        </div>
    </div>
  )
}

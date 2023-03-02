import React from 'react'
import { useDispatch } from 'react-redux'
import { addUserAction } from '../../store/usersReducer/usersReducer'
import s from './style.module.css'

export default function AddUser() {
  
  const dispatch = useDispatch()
  
  const submit = (e) => {
    e.preventDefault()
    const {name , age, gender, avatar} = e.target

    if(gender.value){
      dispatch(addUserAction(name.value, age.value, gender.value , avatar.value))
    }else{
      alert('choose gender')
    }


    name.value = ''
    avatar.value = ''
    age.value = ''
    const male = document.querySelector('#male')
    const female = document.querySelector('#female')
    male.checked = false
    female.checked = false

  }


    
  return (
    <form className={s.form} onSubmit={submit}>

        <div className={s.info}>
          <input required className={s.name} type="text" name='name' placeholder='name'/>
          <input required className={s.age} type="number" name='age' min='1' max='200' placeholder='age'/>
  
          <div className={s.gender}>
              <div className={[s.gender_user , s.gender_man].join(' ')}>
                  <input id='male' type="radio" name='gender' value='m'/>
                  <label htmlFor='male'>Male</label>

              </div>
              <div className={[s.gender_user , s.gender_weman].join(' ')}>
                  <input id='female' type="radio" name='gender' value='f'/>
                  <label htmlFor='female'>Female</label>
              </div>
          </div>
        </div>

        <input className={s.avatar} type="text" name='avatar' placeholder='past link on avatar here'/>
        <button className={s.button} type='sybmit'>Add User</button>

    </form>
  )
}

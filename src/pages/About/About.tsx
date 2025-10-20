import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { userActions } from '../../redux/slice/userSlice'

export const About = () => {
  const {id} = useParams()
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(userActions.getUserById(id || ""))
  },[dispatch,id]
  )
  const {user} = useAppSelector(state=>state.user)
  console.log(user)
  return (
    <div>About</div>
  )
}

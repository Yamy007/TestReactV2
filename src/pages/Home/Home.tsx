import { useEffect } from 'react'

import { useAppDispatch } from '../../hooks/reduxHooks'
import { userActions } from '../../redux/slice/userSlice'
import { User } from '../../components/User'

export const Home = () => {
    const dispatch = useAppDispatch()
    useEffect(()=>{
      dispatch(userActions.getAllUsers())
    },[])
  return (

    <div>
      <User />
    </div>
  )
}

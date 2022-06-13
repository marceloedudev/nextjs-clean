import useUserData from '@/view/hooks/useUserData'
import React from 'react'
import { ProfileContainer } from './styles'

const Profile = () => {
  const { accountState } = useUserData()
  return (
    <ProfileContainer>Profile {accountState?.user?.stars}</ProfileContainer>
  )
}

export default Profile

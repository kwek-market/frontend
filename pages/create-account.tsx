import React from 'react'

import Topbar from '../common/topBar/TopBar'
import CreateAccount from '../components/auth/CreateAccount'

const Page = () => {
  return (
    <div id='create-account' className="auth-page">
      <Topbar withLogo={true} />
      <CreateAccount />
    </div>
  )
}

export default Page
import React from "react";

import Topbar from '../common/topBar/TopBar'
import SignIn from "../components/auth/SiginIn";

function Page() {
  return (
    <div id='sign-in' className="auth-page">
      <Topbar withLogo={true} />
      <SignIn />
    </div>
  );
}

export default Page;

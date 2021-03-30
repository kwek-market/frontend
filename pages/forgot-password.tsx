import React from "react";

import Topbar from '../common/topBar/TopBar'
import ForgotPass from "../components/auth/ForgotPass";

function Page() {
  return (
    <div id='forgot-password' className="auth-page">
      <Topbar withLogo={true} />
      <ForgotPass />
    </div>
  );
}

export default Page;
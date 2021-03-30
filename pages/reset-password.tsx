import React from "react";

import Topbar from '../common/topBar/TopBar'
import ResetPass from "../components/auth/ResetPass";

function Page() {
  return (
    <div id='forgot-password' className="auth-page">
      <Topbar withLogo={true} />
      <ResetPass />
    </div>
  );
}

export default Page;
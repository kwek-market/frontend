import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <div>
          <i className="fas fa-left-arrow" />
        </div>
      </nav>
      <nav>
        <div>
          <p>verification</p>
        </div>
      </nav>
      <nav>
        <i className="fas fa-user" /> Hi Allison{" "}
        <i className="fas fa-caret-down" />
      </nav>
    </header>
  );
}

export default Header;

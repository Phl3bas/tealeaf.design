import { Link } from "gatsby";
import * as React from "react";
import Logo from "../assets/svg/tealeaf-primary.svg";

function IndexPage() {
  return (
    <div className="h-screen m-auto flex-col justifycontent-center alignitems-center container">
      <Logo className="w-24 @lg:w-25" />
      <p className="text-grey-600 text-h4 m-7 mb-13">
        A Beautifully Modular Design System
      </p>
      <div className="flex-row">
        <a
          role="button"
          className="bg-brand-primary-alt text-white-000 text-white-000:visited"
          href={"https://github.com/Phl3bas/Tealeaf"}
        >
          Github
        </a>
        <Link
          role="button"
          className="bg-brand-primary text-white-000 text-white-000:visited"
          to={"/docs"}
        >
          Docs
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;

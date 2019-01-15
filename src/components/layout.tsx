import * as React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Header from "./header";
import "../css/style.css";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="flex flex-col font-sans min-h-screen text-grey-darkest">
        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="flex flex-col flex-1 max-w-xl mx-auto w-full">
          {children}
        </div>

        <footer className="bg-blue">
          <div className="flex justify-between max-w-xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">
              Contactanos en{" "}
              <a
                href="https://wa.me/525538434753"
                className="font-bold no-underline text-white"
              >
                Whatsapp <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </p>
          </div>
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

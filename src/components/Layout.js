import React from "react";
import "../styles/global.css";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col justify-between h-screen">
      {children}
      <footer className="text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4sm:py-2 sm:mt-0">
            Special thanks to:
            <a
              href="https://twitter.com/knyttneve"
              className="ml-1 text-gray-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              tailblocks.cc
            </a>
            ,
            <a
              href="https://www.gatsbyjs.com/"
              className="ml-1 text-gray-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              Gatsby
            </a>
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              className="ml-3 text-gray-500"
              href="https://twitter.com/laneparton/"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              className="ml-3 text-gray-500"
              href="https://github.com/laneparton/drupalcon-schedule"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <title>GitHub</title>
                <path
                  className="fill-gray-500"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
};

export default Layout;

import { Link, Routes } from "blitz"

const Sidebar = () => {
  return (
    <>
      <div className={"-z-90 flex justify-center fixed top-0 left-0 w-14 bg-primary"}>
        <div className="flex-shrink-0 flex justify-items-start">
          <a href="#">
            <h1 className="text-white text-center text-6xl font-title mx-auto">M</h1>
          </a>
        </div>
      </div>
      <nav
        className={"-z-100 flex justify-center w-14 bg-tertiary2 fixed top-0 left-0 h-full fixed"}
      >
        <ul className={"mt-[60px]"}>
          <li className={"mt-10"}>
            <a href="#Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9 hover:stroke-primary active:stroke-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke={"currentColor"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.3}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </a>
          </li>
          <li className={"mt-10"}>
            <Link href={Routes.LoginPage()}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 hover:stroke-primary active:stroke-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={"currentColor"}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.3}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </a>
            </Link>
          </li>
          <li className={"mt-10"}>
            <Link href={Routes.ArticlesPage()}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 hover:stroke-primary active:stroke-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={"currentColor"}
                  strokeWidth={1.3}
                >
                  <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </a>
            </Link>
          </li>
          <li className={"mt-10"}>
            <Link href={Routes.VideosPage()}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 hover:stroke-primary active:stroke-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={"currentColor"}
                  strokeWidth={1.3}
                >
                  <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </a>
            </Link>
          </li>
          <li className={"mt-10"}>
            <Link href={Routes.ProjectsPage()}>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 hover:stroke-primary active:stroke-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={"currentColor"}
                  strokeWidth={1.3}
                >
                  <path d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar

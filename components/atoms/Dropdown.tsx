/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { Routes, Link, useMutation, useRouter } from "blitz"
import logout from "../../app/auth/mutations/logout"
import { useCurrentUser } from "../../app/core/hooks/useCurrentUser"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Dropdown() {
  const [signOut] = useMutation(logout)
  const router = useRouter()
  const user = useCurrentUser()

  return (
    <Menu as="div" className="relative inline-block text-left z-30">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Menü
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="px-4 py-3">
            <p className="text-sm">Eingeloggt als</p>
            <p className="text-sm font-medium text-gray-900 truncate">{user.email}</p>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link href={Routes.NewArticlePage()}>
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    + Artikel
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href={Routes.NewVideoPage()}>
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    + Video
                  </a>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href={Routes.NewProjectPage()}>
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    + Projekt
                  </a>
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    signOut()
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full text-left px-4 py-2 text-sm"
                  )}
                >
                  Ausloggen
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

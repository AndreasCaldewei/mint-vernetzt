/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from "react"
import { Menu, Popover, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { Routes, Link } from "blitz"
import Dropdown from "./Dropdown"
import { Suspense } from "react"
const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
}
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

function Navbar() {
  return (
    <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8 bg-primary">
      <div className="flex md:absolute md:static md:inset-y-0 lg:static xl:static">
        <div className="z-30 flex-shrink-0 flex justify-items-start">
          <Link href="/">
            <h1 className="z-30 text-white text-6xl font-title bg-primary ml-2 cursor-pointer">
              MINTFLIX
            </h1>
          </Link>
        </div>
      </div>

      <div className=" flex items-center justify-end xl:col-span-10 mr-4 ">
        <Suspense fallback={""}>
          <Dropdown></Dropdown>
        </Suspense>
      </div>
    </div>
  )
}

export default Navbar

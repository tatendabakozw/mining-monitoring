import NotificationMenu from "@components/notification-menu/NotificationMenu";
import {
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

interface Props {
  setSidebarOpen: any;
}

const DashboardNavbar = ({ setSidebarOpen }: Props) => {
  const [query, setQuery] = useState<string>("");
  const [notifications_menu, setOpenNotificationMenu] =
    useState<boolean>(false);

  const search_items_handler = (e: any) => {
    e.preventDefault();
    console.log(query);
  };

  const logout_user = () => {
    // dispatch({ type: 'USER_LOGOUT' })
    // history.push('/')
    // Cookies.remove('userInfo')
    // window.location.reload()
  };

  const userInfo = {
    name: "tatenda",
    photoURL: "",
  };

  return (
    <>
      <div className="relative z-10 flex-shrink-0 flex h-16 w-full bg-slate-100 border-b border-gray-200 lg:border-none">
        <button
          type="button"
          className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        {/* Search bar */}
        <div className="flex-1 md:px-8 px-4 flex justify-between">
          <div className="flex-1 flex">
            <form
              onSubmit={search_items_handler}
              className="w-full flex md:ml-0"
              action="#"
              method="GET"
            >
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <div className="relative w-full text-gray-400 focus-within:text-gray-600 bg-slate-100">
                <div
                  className="absolute inset-y-0 left-0 text-slate-900 flex items-center pointer-events-none bg-slate-100"
                  aria-hidden="true"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  name="search-field"
                  onChange={(e) => setQuery(e.target.value)}
                  className="block w-full h-full bg-slate-100 pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 outline-none sm:text-sm"
                  placeholder="Search items"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className="ml-4 flex items-center md:ml-6 space-x-4">
            <button
              onClick={() =>
                !notifications_menu
                  ? setOpenNotificationMenu(true)
                  : setOpenNotificationMenu(false)
              }
              type="button"
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <>
              <NotificationMenu
                show={notifications_menu}
                setShow={setOpenNotificationMenu}
                loading={false}
              />
            </>
            <button
              type="button"
              onClick={logout_user}
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">View notifications</span>
              <ArrowRightOnRectangleIcon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;

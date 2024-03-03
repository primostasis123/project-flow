import { Home } from "lucide-react";
import Link from "next/link"

const Menu = () => {
    return (
        <div className="flex h-full max-h-screen flex-col gap-2 border-r">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              {/* <Package2Icon className="h-6 w-6" /> */}
              <span className="">Acme Inc</span>
            </Link>
            {/* <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
               <BellIcon className="h-4 w-4" /> 
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-50"
              href="#"
            >
              {/* <HomeIcon className="h-4 w-4" /> */}
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              {/* <ShoppingCartIcon className="h-4 w-4" /> */}
              Orders
              {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">6</Badge> */}
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              {/* <PackageIcon className="h-4 w-4" /> */}
              Products
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              {/* <UsersIcon className="h-4 w-4" /> */}
              Customers
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              {/* <LineChartIcon className="h-4 w-4" /> */}
              Analytics
            </Link>
          </nav>
        </div>)
}

export default Menu;
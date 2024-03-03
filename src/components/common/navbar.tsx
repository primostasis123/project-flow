import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Bell, Info, Menu } from "lucide-react";
const Navbar = () => {
  return (
    <div className="dark sticky shadow-none whitespace-nowrap">
      <div className="flex justify-between bg-gray-800 text-white px-3 md:px-8 min-h-[56px] md:min-h-[64px]">
        <div className="flex items-center w-full gap-x-2 md:gap-x-4 min-w-0">
          <div className="block md:hidden">
            <Button variant="ghost">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
          <div className="shrink-0 w-auto md:mr-2 hidden md:block">
            <a href="/projects/99513576-17c8-46c6-bb2c-700905a66886/timeline">
              <svg
                width="110"
                height="24"
                viewBox="0 0 1225 265"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                name="Shape logo"
                data-testid="shape-logo"
                className="h-full"
              >
                <path d="M493.009 207.085C523.723 207.085 545.244 190.825 545.244 163.518C545.244 138.921 529.155 127.873 498.233 120.369C470.235 113.699 463.549 108.696 463.549 97.4394C463.549 87.4338 472.325 79.7211 487.368 79.7211C500.74 79.7211 513.903 84.9324 527.066 94.7296L540.856 75.3437C526.021 63.462 509.098 57 487.786 57C458.744 57 437.85 74.3014 437.85 99.3155C437.85 126.623 455.401 135.794 486.532 143.09C513.694 149.552 519.544 155.18 519.544 165.603C519.544 177.068 509.515 184.363 493.636 184.363C475.459 184.363 461.46 177.485 447.461 165.394L432 183.738C449.551 199.372 470.653 207.085 493.009 207.085Z"></path>
                <path d="M594.27 205H619.969V143.507H689.754V205H715.453V59.0845H689.754V119.744H619.969V59.0845H594.27V205Z"></path>
                <path d="M759.281 205H785.607L800.65 169.772H869.808L884.643 205H911.805L847.452 58.0423H823.633L759.281 205ZM810.053 147.051L835.125 88.6845L860.406 147.051H810.053Z"></path>
                <path d="M955.689 205H981.389V158.099H1010.43C1042.61 158.099 1068.93 141.006 1068.93 108.279C1068.93 78.4704 1047.41 59.0845 1013.36 59.0845H955.689V205ZM981.389 134.961V82.431H1011.27C1030.49 82.431 1042.82 91.3944 1042.82 108.487C1042.82 124.121 1030.7 134.961 1011.27 134.961H981.389Z"></path>
                <path d="M1114.06 205H1223.54V182.07H1139.76V142.882H1213.09V119.952H1139.76V82.0141H1222.49V59.0845H1114.06V205Z"></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M102.69 10.3746C85.3142 20.5304 71.1132 45.1272 42.7113 94.3208C14.3093 143.514 0.108347 168.111 0.00108315 188.237C-0.145017 215.65 14.498 241.012 38.3111 254.592C55.7942 264.562 84.1961 264.562 141 264.562C197.804 264.562 226.206 264.562 243.689 254.592C267.502 241.012 282.145 215.65 281.999 188.237C281.892 168.111 267.691 143.514 239.289 94.3208C210.887 45.1272 196.686 20.5304 179.31 10.3746C155.643 -3.45821 126.357 -3.45821 102.69 10.3746ZM141.572 71.4098C127.153 71.4098 117.541 88.059 98.3159 121.357L94.7089 127.605C75.4841 160.903 65.8717 177.552 73.081 190.039C80.2903 202.526 99.5151 202.526 137.965 202.526H145.179C183.628 202.526 202.853 202.526 210.062 190.039C217.272 177.552 207.659 160.903 188.435 127.605L184.828 121.357C165.603 88.059 155.99 71.4098 141.572 71.4098Z"
                  fill="#6366F1"
                ></path>
              </svg>
            </a>
          </div>
          <div className="relative flex w-full overflow-hidden md:hidden">Menu Here Fix</div>
        </div>
        <div className="flex items-center">
          {/* <div className="mr-6">
            <Button>New Issue</Button>
          </div> */}
          <Button className="relative flex mr-2 md:mr-4 rounded-full h-8 w-8 bg-gray-800 p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            <Info className="w-6 h-6" />
          </Button>
          <Button className="relative flex mr-3 md:mr-6 rounded-full h-8 w-8 bg-gray-800 p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            <Bell className="w-6 h-6" />
          </Button>
          <div className="inline-flex items-center gap-x-3 rounded-full py-2 pl-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full border border-gray-200 w-6 h-6 dark:border-gray-800 flex justify-center overflow-hidden bg-gray-200 text-center "
                  size="icon"
                  variant="ghost"
                >
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <span className="hidden items-center gap-x-1 text-sm font-medium leading-5 md:flex">
              Edito Moncada
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

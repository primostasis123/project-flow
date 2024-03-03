"use client";

import Link from "next/link";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { cn } from "@/lib/utils";
import { AlarmClock, Bug, Check, ChevronsUpDown, FolderClosed } from "lucide-react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const frameworks = [
    {
      value: "project one",
      label: "Project One",
    },
    {
      value: "project two",
      label: "Project Two",
    },
  ];
  return (
    <div className="flex h-full flex-col gap-y-5 border-r">
      <div className="section-header my-2 md:hidden">
        <div className="flex h-16 w-full items-center px-6 py-5 ">
          <div className="h-full shrink-0">
            <Link href="#">
              <svg
                width="110"
                height="24"
                viewBox="0 0 1225 265"
                fill="#1f2937"
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
            </Link>
          </div>
        </div>
        <div className="relative w-full" role="separator" aria-label="divider">
          <div className="absolute h-[1px] w-full border-t border-t-gray-200 "></div>
        </div>
      </div>
      <div className="hidden pt-2 px-2 md:block">
        <div className="min-w-0">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                aria-expanded={open}
                className="w-[200px] justify-between"
              >
                <span className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm font-medium leading-5">
                  {value
                    ? frameworks.find((framework) => framework.value === value)
                        ?.label
                    : "Select project..."}
                </span>
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search project..." className="h-9" />
                <CommandEmpty>No project found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {framework.label}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === framework.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 overflow-hidden overflow-y-auto">
        <div className="section" role="menu" aria-label="main menu">
          <nav className="py-0 px-2">
            <Link href="#" className="flex w-full">
              <div className="w-full px-0 rounded hover:bg-gray-100 flex items-center text-left gap-3 flex-nowrap h-[38px] my-px bg-gray-200">
                <div className="w-14 h-[38px] grid pb-px items-center justify-center shrink-0">
                  <div className="relative inline-block">
                    <Bug />
                  </div>
                </div>
                <span className="text-gray-800 min-w-[150px] font-medium text-sm">
                  Issues
                </span>
              </div>
            </Link>

            <Link href="#" className="flex w-full">
              <div className="w-full px-0 rounded hover:bg-gray-100 flex items-center text-left gap-3 flex-nowrap h-[38px] my-px">
                <div className="w-14 h-[38px] grid pb-px items-center justify-center shrink-0">
                  <div className="relative inline-block">
                    <AlarmClock />
                  </div>
                </div>
                <span className="text-gray-800 min-w-[150px] font-medium text-sm">
                  Spent Time
                </span>
              </div>
            </Link>
            
            <Link href="#" className="flex w-full">
              <div className="w-full px-0 rounded hover:bg-gray-100 flex items-center text-left gap-3 flex-nowrap h-[38px] my-px">
                <div className="w-14 h-[38px] grid pb-px items-center justify-center shrink-0">
                  <div className="relative inline-block">
                    <FolderClosed />
                  </div>
                </div>
                <span className="text-gray-800 min-w-[150px] font-medium text-sm">
                  Documents
                </span>
              </div>
            </Link>

            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;

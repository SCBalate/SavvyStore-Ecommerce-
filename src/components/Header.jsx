
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaRegUser} from "react-icons/fa";
import { SavvyStore_Pink } from '../utils/assetImports/imageConstants'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import{useData} from "../context/dataContext";
import { ACTION_TYPE } from '../reducer/reducerActions/actions';
import Tooltip from './Tooltip';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Header =()=> {
  const {data,dispatch} = useData();
  const [open, setOpen] = useState(false)
const navigate = useNavigate();

  const searchItemHandler = (e) => {
    if (e.keyCode === 13) {
      navigate("/product");
    }
  };
  const{wishList,cart} = data;

  const handleInputChange = (e) => {
    dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value });
  };

  const navigatetoProductPage = (categoryName) => {
    dispatch({ type: ACTION_TYPE.CLEAR_FILTER });
    dispatch({ type: ACTION_TYPE.ADD_CATEGORY, payload: categoryName });
  };

  const navigation = {
    categories: [
      {
        id: 'women',
        name: 'Women',
        para: "Women`s fashion"
      },
      {
        id: 'men',
        name: 'Men',
        para: "Men`s fashion"
      },
      {
        id: 'kids',
        name: 'Kids',
        para: "Kid`s fashion"
      },
      {
        id: 'beauty',
        name: 'Beauty',
        para: "Beauty"
      },
    ],
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' },
    ],
  }
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          <NavLink to="/product"
                          onClick={()=>navigatetoProductPage(category?.para)}>
                          {category.name}
                          </NavLink>
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                
                </Tab.Group>

               

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                
                  <FaRegUser/>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
       

        <nav aria-label="Top" className="mx-auto  px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-10 w-auto"
                    src={SavvyStore_Pink}
                    alt="logo"
                    
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                              <Link to="/product"
                          onClick={()=>navigatetoProductPage(category?.para)}>
                          {category.name}
                          </Link>
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                 
                </div>
              </Popover.Group>

             
        <div className="searchbar mt-2 mx-auto">
          <AiOutlineSearch onClick={searchItemHandler} className="searchIcon" />
          <input
            type="text"
            name="search"
            placeholder="Search For Products"
            id="search"
            className="search"
            onChange={handleInputChange}
            onKeyDown={searchItemHandler}
          />
        </div>
        
        <div className=" flex items-center content-around gap-7">
               <Tooltip text="Wishlist">
               <div className="wishlisht-icon cursor-pointer" onClick={() => navigate("/wishlist")}>
            <span>
              <AiOutlineHeart />
              {/* {token && (
                <span className="wishlist-count">{wishList.length}</span>
              )} */}
            </span>
          </div>
          </Tooltip>
              

                {/* Cart */}
                <Tooltip text="Cart">
                <div className=" flow-root ">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
                </Tooltip>
                <Tooltip text="Profile">
                <div className="profile-container cursor-pointer">
                <FaRegUser/>
                
                </div>
                </Tooltip>
 
  
  
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header;
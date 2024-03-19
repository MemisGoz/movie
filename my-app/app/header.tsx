"use client"
import React, { useState } from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { Squash as Hamburger } from 'hamburger-react'


function Header() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
         
            <div className='xl:flex justify-center p-10  hidden '>
                <div className='flex gap-9'>
                    <a href="">Home</a>
                    <a href="">Movies</a>
                    <DropdownMenu>
                        <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Login or sign up here</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Login</DropdownMenuItem>
                            <DropdownMenuItem>Sign up</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>


        {/*Mobile Nav*/}
         <div className='xl:hidden'>
            <Drawer>
                <DrawerTrigger><Hamburger  toggle={setOpen} /></DrawerTrigger>
                
                    <DrawerContent className='inset-y-0 right-0 h-auto w-1/2 rounded-l-[10px]'>
                        <DrawerHeader>
                            <DrawerTitle>Movio</DrawerTitle>
                            <DrawerDescription>For the movie people</DrawerDescription>
                        </DrawerHeader>
                        <div className='flex flex-col justify-center items-center gap-9 h-1/2'>
                            <a href="">Home</a>
                            <a href="">Movies</a>

                            <DropdownMenu>
                                <DropdownMenuTrigger>Profile</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>Login or sign up here</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Login</DropdownMenuItem>
                                    <DropdownMenuItem>Sign up</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <DrawerFooter>
                            <DrawerClose>
                                <button className="">Close</button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                
                </Drawer>
           </div>  
          
       
        </>
      
    );
}

export default Header;

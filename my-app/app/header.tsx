import React from 'react';
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
  

function Header() {
   
    return (
        <>
         
            <div className='flex justify-center'>
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
         <div className='lg:hidden'>
            <Drawer>
                <DrawerTrigger>Open</DrawerTrigger>
                
                    <DrawerContent className='inset-y-0 right-0 h-auto w-1/2 rounded-l-[10px]'>
                        <DrawerHeader>
                            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                            <DrawerDescription>This action cannot be undone.</DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                            <DrawerClose>
                                <button className="outline">Cancel</button>
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                
                </Drawer>
           </div>  
          
       
        </>
      
    );
}

export default Header;

//to store link reduce make it as array 

import { NavBar } from "@/types/navType";

export const navLink : NavBar[]= [
    {
        path : '/',
        name : 'Home',
        active:true,
    },
    {
        path : '/about',
        name : 'About',
        active:false,
    },
    {
        path : '/product',
        name : 'Product',
        active:false,
    },
    {
        path : '/contact',
        name : 'Contact',
        active:false,
    },
    {
        path : '/blog',
        name : 'Blog',
        active:false,
    },

    
]
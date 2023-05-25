"use client";

import Link from "next/link";

export default function Linking ({path,children}){
   console.log("Client Side")
// console.log(path,children)
    return (
        <>
       <Link href={path}>
       {children}
       
       </Link>
        </>
    )
}
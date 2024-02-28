"use client";
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './navbar.module.css';


const Navbar = () => {
  let [a,setA]=useState(1);
  let [b,setB]=useState(0);
  // {styles.navbar}
  return (
    <div className="mt-0 z-50 ml-0 relative bg-red-200 w-auto h-[0px]">
        <div className={styles.logo} onClick={()=>{setA(1)}}>
            <Link href="/"><img src={a?"/logo_w.svg":"/logo_b.svg"} width={82} height={25} alt='logo'></img></Link>
        </div>
        <div className={styles.pages}>
            <div className={a?styles.products:b?styles.productsa:styles.productsaa} onClick={()=>{setA(0),setB(1)}}><Link href="/products">Products</Link></div>
            <div className={a?styles.contactus:b?styles.contactusa:styles.contactusaa} onClick={()=>{setA(0),setB(0)}}><Link href="/contactUs">Contact Us</Link></div>
        </div>
    </div>
  )
}

export default Navbar
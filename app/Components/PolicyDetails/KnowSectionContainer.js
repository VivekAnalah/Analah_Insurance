'use client'

import { useEffect } from "react";



export const KnowSectionContainer = ({children, img}) => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const id = entry.target.getAttribute("id");
    
            if (entry.intersectionRatio > 0) {
              document
                .querySelector(` .anchorParent a[href="#${id}"]`)
                .classList.add("actives");
            } else {
              document
                .querySelector(` .anchorParent a[href="#${id}"]`)
                .classList.remove("actives");
            }
          });
        });
    
        // Track all sections that have an `id` applied
        if (
          img === "Term_ins" ||
          img === "Health_ins" ||
          img === "Family_ins" ||
          img === "Group_ins"
        ) {
          const top = document.getElementById("top");
          const no_benefit = document.getElementById("no_benefit");
          const key_terms = document.getElementById("key_terms");
          observer.observe(top);
          observer.observe(no_benefit);
          observer.observe(key_terms);
        } else if (img === "Car_ins") {
          const top = document.getElementById("top");
          const no_benefit = document.getElementById("no_benefit");
          const key_terms = document.getElementById("key_terms");
          const isRequired = document.getElementById("isRequired");
          const extra = document.getElementById("extra");
    
          observer.observe(top);
          observer.observe(no_benefit);
          observer.observe(key_terms);
          observer.observe(isRequired);
          observer.observe(extra);
        } else if (img === "Bike_ins") {
          const top = document.getElementById("top");
          const twoWheel = document.getElementById("twoWheel");
          const key_terms = document.getElementById("key_terms");
          const gridHeader = document.getElementById("gridHeader");
    
          observer.observe(top);
          observer.observe(twoWheel);
          observer.observe(key_terms);
          observer.observe(gridHeader);
        } else if (img === "Travel_ins") {
          const top = document.getElementById("top");
          const what = document.getElementById("what");
          const gridHeader = document.getElementById("gridHeader");
    
          observer.observe(top);
          observer.observe(what);
          observer.observe(gridHeader);
        } else if (img === "Home_ins") {
          const top = document.getElementById("top");
          const why = document.getElementById("why");
    
          observer.observe(top);
          observer.observe(why);
        } else if (img === "Retirement_ins") {
          const top = document.getElementById("top");
          const why = document.getElementById("why");
          const no_benefit = document.getElementById("no_benefit");
    
          observer.observe(top);
          observer.observe(why);
          observer.observe(no_benefit);
        }
    
        return () => {
          observer.disconnect();
        };
      }, []);
    


  return (
    <>
    {children}
    </>
     
  )
}

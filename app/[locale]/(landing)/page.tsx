import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Link from "next/link";
import {useTranslations} from "next-intl";

const Page = () => {
    const translated = useTranslations("Index");

    function calc (a : number, b : number){
        return a - b;
    }
    console.log(calc(1, 2));

    let student : [id : number, name : string] = [1, "panha"];
    student[0] = 2;
    student.push("dara");
    student.push(1, "para");
    student.push(3, "bora")
    student.push(5)
    console.log(student);

    const stringArray : Array<string> = ["a", "b", "c"]
    stringArray.push("d");
    console.log(stringArray);

    let all : number[] = [12, 11, 13];
    all = [1, 2, 3]
    console.log(all);

    const greeting = (name : number) => {
        return `hello ${name}`; 
    }
    console.log(greeting(12));

    function titalSalary (salary : number[]) {
        const total = salary.reduce((p, c) =>{
            return p + c;
        })
        return total;
    }

    let salaary : number[];
    salaary = [5, 6, 7]
    console.log(`Total Salary: ${titalSalary(salaary)}`)

    function fuc() : [number, string, boolean] {
        return [1, "hello", true];
    }
    console.log(fuc());

    function app (dicument : string) {
        console.log(dicument);
        return "done";
    }

    const enum Size {Small = 1, Medium = 2, Large = 3}
    console.log(Size.Large)

    function plus (a : number, b : number) {
        if (a < 100){
            return a * 12;
        }
        return a + b;
    }
    console.log(plus(1, 2))
    
    let data : {id : number, name : string} = {id : 1, name : "para"}
    console.log(data)

    let date = new Date().toLocaleTimeString();
    console.log(date);

    function kgTol(num1 : number | string ){
        if (typeof num1 === "number") {
            return num1 + num1;
        }
        return Number(num1) * Number(num1) + 10;
    }
    console.log(kgTol("100.5"))

    type Query = 50 | 100;
    let qty : Query = 100
    console.log(qty);

    function press (name : string | null) {
        if(name){
            return name.toUpperCase();
        }
        return "Guest";
    }
    console.log(press(null));

    function get(id: number){
        return id === 0? null : new Date().toLocaleString();
    }
    console.log(get(1))

    type Customer = {
        date : Date
    }

    function cus(id : number) : Customer | null | undefined {
        if(id === 0) {
            return null;
        }
        return {date : new Date()}
    }
    let customer = cus(1);
    if (customer !== null || customer !== undefined){
        return  console.log(customer?.date?.getFullYear())
    }
    // console.log(customer?.date?.getFullYear())


    return (
        <div>
            <div className={"d-flex gap-2"}>
                <Link href={"/en/login"} >Login</Link>
                <Link href={"/en/signup"}>SignUp</Link>
                <Link href={"/en/dashboard"}>Dashboard</Link>
            </div>

            <h1 className='text-3xl font-bold underline text-red-300'>
                hello world
            </h1>

            <h2>Landing Page</h2>
            <h1>{translated("title")}</h1>
        </div>
    );
};

export default Page;

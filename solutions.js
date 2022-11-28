"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function concat(a,b){
    return a.toString() + b.toString();
}
function and(a,b){
    return a&&b;
}
function or(a,b){
    return a||b;
}
function isEqual(a,b){
    return a==b;
}

function isIdentical(a,b){
    return a===b;
}

function isEven(e){
    if (e === false){
        return  false;
    }else {
        return e % 2 == 0;
    }
}


function addOne(a){
    return parseFloat(a) + 1;
}



function not (n){
    return !n;
}





function isFalse (f){
    if(typeof f ==="undefined" || f === null)
        return false;
    else {
        return !f;
    }
}



function isTrue(t){
    if(typeof t === "string" || typeof t === "number"){
        return false;
    } else {
        return t;
    }
}




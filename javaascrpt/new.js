// synchronous and asynchronous 

// console.log('one')
// setTimeout(()=>{
//     console.log('three')
// })
// setTimeout(()=>{
//     console.log('four')
// },2000)
// console.log('two') 

//Dom:-document object model
// with the help the connect html+java;
// console.log(document,'html') 

//  let h2=document.getElementById('one')
// let h2=document.getElementsByClassName('two')

// let h2=document.querySelector('h2')
// let h2=document.querySelectorAll('h2')

//  h2.innerText='hiii good morning'
//  console.log(h2)
//  h2.style.color='red'
//  h2.style.font='italic'
//  console.log(h2);

// function fun1(){ 
//     console.log('hello')
// }
// let btn=document.querySelector("button")
// btn.onclick=function(){
//     console.log('hello')
// }
// btn.addEventListener('click',function(){
//     console.log('hello')
// })
let inp=document.querySelector('input')
let p=document.querySelector('p')


inp.addEventListener('input',(e)=>{
    p.innerText=e.target.value
    // console.log(e.target.value);
    // console.log(e.target);


})


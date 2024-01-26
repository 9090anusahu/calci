// console.log('hello')
// var:-redeclare possible,re assign possible
// var a=10;
// var a=20;
// console.log(a)
// let:-only re assign possible
// let b=30
// b=40
// const:-both case impossile
// 
// const c=30
// c-59
// let firstName='abc'
// let secondName='xyz' 
// console.log(firstName+"  "+secondName)
// console.log(`${firstName}     ${secondName}`)





// if(true){
//     console.log('hello')
// }
// else{
//     console.log('hello hii')
// }

// let user=true
// user?console.log('hello'):console.log('hello hii')

// let arr=[1,2,3,4,5,'s','hello','true',false]
// for(let i in arr){
//     console.log(i)
// } 
// function add(){
//     console.log('hello')
// }
// add()

// const add=(a)=>{
//     console.log('hello hii')
// }
// add(5)
// for(let i of arr){
//     console.log(i)
// } 

// let new1=arr.forEach((c,b,a)=>{
//     // return a
//     console.log(c*2)
// } 
// )
// console.log(new1)
// let new1=arr.map((c,b,a)=>{
   
//     console.log(a)
//     return a
// }
// )
// let arr=[1,2,3,4]
// let new1=arr.filter((a,b,c,d)=>{  
//     return a>2
// }
// )
// console.log(new1)

// let new2=arr.find((a,b,c,d)=>{   
//     return a>2
// }
// )
// console.log(new2)

// let arr=[1,2,3,4]
// let new3=arr.reduce((a,b,c,d)=>{
//     return a+b
// }
// )
// console.log(new3)


//   object
// let obj={
//     id:1,
//     user:"hello",
//     isPass:true,

// }
// obj.user='hii'
// array of object

// let arr=[{ id:1,user:"hello",{ id:1,user:"hello}]
// arr.map((k)=>{
//     console.log(k.id)
// })

// let arr=[1,2,3,4,5]
// arr.push(7)
// arr.pop()
// arr.unshift(7)
// arr.shift(7)

// console.log(arr)


// function

// function add(a){
//     console.log(a.id)
// }

// let obj={ 
//     id:1
//     userName:'hello'
// }

// add(obj)

// let obj={
//     id:1,
//     user:"hello",
//     fullname:function(){
//         console.log(this)
//     }
// }

// obj.fullname()  



// console.log(b)
// var b=5

// console.log(b)
// let a=5

// {
// let a=5
// console.log(a)}
// console.log(a)
// higher order function
//     function outer(a){
// console.log('outer')
// a()
//     }

//     function inner(){
//         console.log('inner')

//     }
//     outer(inner)

// function outer(){
//     console.log('outer')
//     function inner(){
//         console.log('inner')
       
//     }
//     return inner
// }
// let i=outer()
// i()

// let arr=["1","2"," 4","hello","hii","true","false"];
// for(let num of arr){
//     console.log(arr);
// }
// let arr=[1,2,3,4,5,true,false,'hello','hii']; 
// function get(arr){
//     let res=[]
//     for(let item of arr){ 
//         if(typeof item==='string'){
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(get(arr))
// function get(arr){
//     let res=[]
//     for(let item of arr){
//         if(typeof item==='boolean'){
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(get(arr))
// function get(arr){
//     let res=[]
//     for(let item of arr){
//         if(typeof item==='number'){
//             res.push(item)
//         }
//     }
//     return res
// }
// console.log(get(arr))


// higher order
// let arr=[1,2,3,4,5,true,false,'hello','hii']; 
// function getString(item){
//     return typeof item==='string'
// }
// function getNumber(item){
//     return typeof item==='number'
// }
// function getBool(item){
//     return typeof item==='boolean'
// }


// function get(arr,fn){
//     let res=[]
//     for(let item of arr){
//     if(fn(item)){
//         res.push(item)
//     }
// }
//     return res
// }
// console.log(get(arr,getString))
// console.log(get(arr,getNumber))
// console.log(get(arr,getBool))

// //callBack function ex:-high order function,map,produce,filter

// function callBack(num,fn){
//     return fn(num)

// }
// function boolean(num){
//     return typeof num==='boolean'
// } 
// console.log(callBack(true,boolean))

// closure property

function outer(){
    let user='yhi ayega'
 
function inner(){
    console.log(user)
}
//inner
return inner
}
let a=outer()
a()




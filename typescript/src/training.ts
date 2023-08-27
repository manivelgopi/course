let id = 2349.3  // let id: number = 2323.3

let isLoogesIn: boolean = false

const employee: string[] = [];
employee.push("manager","officer");


const models: number[] = [];
models.push(100,10,200);

type User = {
    name: string
    age: number
    creditCard: boolean
}

const shopUser: User[] = []
shopUser.push({name:"Manivel", age:23, creditCard: false})

console.log(shopUser);

type car = {
    carmodel: string
    year: number
}

type boat = {
    boatmodel: string
    year: number
}

// Union
let vehicle: car | boat = {carmodel:"baleno", year: 2023}
vehicle = {boatmodel:"hyndai",year:2023}

function getId(id: string | number ){
    console.log('Db Id', id);
    
}

getId(3)
getId("sd")

//array
const data: number[] = [1,2,3,4,5]
const data2: string[] = ["sd","sdf"]
const data3: (string | number)[] = ["1",2,3,4,5]
const data4: (number | string | boolean)[] = [1,2,3,4,5]

// Tuples
// const mobile: (string|number|boolean)[] = ["hc",true ]
const mobile: [string,number,boolean] = ["hc",2,true]

type tupleUser = [string,number]

const newUserHere: tupleUser = ["sdf",2]
newUserHere[1] = 3


// enum

// const aisle = 0
// const middle = 1 
// const windows = 2

// enum seatChoice {
//     AISLE = 10, MIDDLE, WINDOW
// }

// const hcSeat = seatChoice.AISLE
// 
const enum seatChoice {
    AISLE = 10, MIDDLE, WINDOW
}

const hcSeat = seatChoice.AISLE


//interface 

interface Offer {
    readonly dbid: number
    code: string
    year: number
    googleid?: string
    startAsk:() => string  //  startAsk(): string
}



const modeoffer: Offer = {
    dbid: 33, 
    code:"",
gitToken: "sdf",
    year: 2023, 
    startAsk:()=>{
    return "sd"
}}
modeoffer.code = "a343423423efasdfa"
modeoffer.googleid = "4234"
// modeoffer.dbid = 22 // not possible coz readonly

// .x.
// reopening interface with same name
interface Offer{
    gitToken: string
}

interface Movie extends Offer{
    movieName: string
}
const movieList: Movie = {...modeoffer, movieName: "abcd", gitToken:"sdfsd"}

console.log("sdf",movieList);










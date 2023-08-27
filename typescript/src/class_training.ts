console.log("apple");

// class TUser{
//     name: string
//     email: string
//     // private city: string 
//     // #dob: string = "sdf"
//     constructor(email: string, name: string, //city:string
//     ){
//         this.name = name;
//         this.email = email
//         // this.city = city
//     }  
// } 

class TUser{
    protected _courseCount = 1
    constructor(public email: string, public name: string, //city:string
    ){
    }  

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum){  // no return type
        if(courseNum <= 1)
        throw new Error("Should be more then 1")
        this._courseCount = courseNum
        
    }

} 

const manivel = new TUser("22@g.com","sdf")
manivel.courseCount;
console.log(manivel.courseCount);

// used protected from parent
class subTUser extends TUser{
    isFamily: boolean = true

    changeCourCount(){
        this._courseCount = 3
    }
}


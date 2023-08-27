// in operator 

interface Users{
    name: string
    userId : number
}
interface Admin{
    name: string
    userId : number
    isAdmin: boolean
}

function isAdminAccount(account:Users | Admin): boolean
{
    if("isAdmin" in account){
        return account.isAdmin
    }
    return false
}

// instance of


// as

// 
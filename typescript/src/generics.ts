
//generic

function identityone<TYPE>(val: TYPE): TYPE{
    return val
}

function identity2ne<H>(val: H): H{
    return val
}

function searchProduct<H>(products: H[]): H{
    return products[0]
}

let searchsProduct = <T,>(products: T[]) => products[0]

// parameter with generic

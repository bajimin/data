class Product {
    constructor(prdt_code, name, from_prdt, cmpy_code, phone){
        this.prdt_code = prdt_code
        this.name = name
        this.from_prdt = from_prdt
        this.cmpy_code = cmpy_code
        this.phone = phone
    }
}

export function getProduct(cmpy_code, phone){
    let count = 0;
    let createCount = process.env.PRODUCT_GET_COUNT;
    

    let name = getRandomProductName(createCount)
    let from_prdt = getRandomFrom(createCount)

    let productArr = []
    while(count < createCount){
        let prdt_code = 'pd'+(count+1).toString();

        if(prdt_code && name[count] && from_prdt[count] && cmpy_code && phone){
            let temp = new Product(prdt_code, name[count], from_prdt[count], cmpy_code, phone)
            productArr.push(temp);
        }else {break;}
        count++
    }
    return productArr
}

// 상품 이름 랜덤 선정
function getRandomProductName(count){
    const companyProduct = process.env.PRODUCT_NAME
    let cProduct = companyProduct.slice(2, companyProduct.length-2).split("', '")
    let set = new Set();
    while(set.size < count){
        let fRandom = Math.floor(Math.random() * 10 % cProduct.length);
        set.add(cProduct[fRandom])
    }
    return [...set]
}

function getRandomFrom(count){    
    const productFrom = process.env.PRODUCT_FROM
    let pFrom = productFrom.slice(2, productFrom.length-2).split("', '")
    let arr = new Array();
    while(arr.length < count){
        arr.push(pFrom[Math.floor(Math.random()*10%pFrom.length)])
    }
    return arr
}

// 상품
// {
//     "prdt_code": "pd1",
//     "name": "shrimp",
//     "from_prdt": "south sea",
//     "cmpy_code": "cp1",
//     "phone": "01000000000"
//  }
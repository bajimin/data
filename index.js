import dotenv from "dotenv"
import {getCompany} from './src/company.js';
import {getAsset} from './src/asset.js';
import {getProduct} from './src/product.js';
import {getDetail} from './src/detail.js';

dotenv.config();
let companyArr = getCompany()
let assetArr = []
let productArr = []
let detailArr = []
for(let i of companyArr){
    assetArr = [...assetArr, ...getAsset(i.cmpy_code)];
    productArr = [...productArr, ...getProduct(i.cmpy_code, i.phone)];
}

for(let i of productArr){
    while(true){
        let rand = Math.floor((Math.random() * assetArr.toString().length+1) % assetArr.length);
        if(assetArr[rand].cmpy_code === i.cmpy_code) {
            detailArr = [...detailArr, ...getDetail(i.name, i.cmpy_code, i.prdt_code, assetArr[rand].asst_code)]
            break;
        }
    }
}

console.log(detailArr)

// export function getDetail(name, cmpy_code, prdt_code, asst_code){

    //창고
    // {
    //     "asst_code": "as1",
    //     "asst_name": "asset01",
    //     "asst_type": "fish",
    //     "cmpy_code": "cp1",
    //     "device_id": "device3"
    //   }

    //회사
    // {
    //     "cmpy_code": "cp1",
    //     "cmpy_type": "develop",
    //     "bn_no": "111-333-2222",
    //     "name": "smartm2m",
    //     "address": "busan",
    //     "ceo": "jyj",
    //     "phone": "01000000000"
    //   }

    //상품
    // {
    //     prdt_code: 'pd7',
    //     name: '고등어',
    //     from_prdt: 'east sea',
    //     cmpy_code: 'cp2',
    //     phone: '010-2860-5445'
    //   }

    //디테일
    // {
    //     "name": "pd1",
    //     "cmpy_code": "cp1",
    //     "prdt_code": "01000000000",
    //     "asst_code": "01000000000",
    //     "prdt_id": "01000000000"
    //   }

    
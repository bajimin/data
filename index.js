import {getCompany} from './src/company.js';
import {getAsset} from './src/asset.js';
import {getProduct} from './src/product.js';
import {getDetail} from './src/detail.js';

//회사 데이터
let companyArr = getCompany()
//창고 데이터
let assetArr = []
//상품 데이터
let productArr = []
//상품 디테일 데이터
let detailArr = []

//회사마다 창고랑 상품 생성
for(let i of companyArr){
    assetArr = [...assetArr, ...getAsset(i.cmpy_code)];
    productArr = [...productArr, ...getProduct(i.cmpy_code, i.phone)];
}

//회사, 창고, 상품에 대한 디테일 생성
for(let i of productArr){
    // while(true){
    //     let rand = Math.floor((Math.random() * Math.pow(10, (assetArr.length).toString().length)) % assetArr.length);
    //     if(assetArr[rand].cmpy_code === i.cmpy_code) {
    //         detailArr = [...detailArr, ...getDetail(i.name, i.cmpy_code, i.prdt_code, assetArr[rand].asst_code)]
    //         break;
    //     }
    // }
    //상품의 회사와 같은 창고만 필터
    let filtedAsset = assetArr.filter((ele)=> ele.cmpy_code === i.cmpy_code);
    let rand = Math.floor((Math.random() * Math.pow(10, (filtedAsset.length).toString().length)) % filtedAsset.length);
    detailArr = [...detailArr, ...getDetail(i.name, i.cmpy_code, i.prdt_code, filtedAsset[rand].asst_code)]
}

console.log(detailArr)
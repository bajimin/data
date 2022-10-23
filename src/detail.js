class Detail {
    constructor(name, cmpy_code, prdt_code, asst_code, prdt_id){
        this.name = name
        this.cmpy_code = cmpy_code
        this.prdt_code = prdt_code
        this.asst_code = asst_code
        this.prdt_id = prdt_id
    }
}

// 디테일 데이터 생성 함수
// 상품이랑 무작위 창고랑 비교해서 회사가 같으면 해당 창고에 상품 N개 반환
export function getDetail(name, cmpy_code, prdt_code, asst_code){
    let count = 0;    
    let createCount = process.env.DETAIL_GET_COUNT;

    let detailArr = []
    while(count < createCount){
        //상품 디텔일 id
        let prdt_id = '01'+(count+1).toString().padStart(9, '0');

        if(name && cmpy_code && prdt_code && asst_code && prdt_id){
            let temp = new Detail(name, cmpy_code, prdt_code, asst_code, prdt_id)
            detailArr.push(temp);
        }else {break;}
        count++
    }
    return detailArr
}
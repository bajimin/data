class Asset {
    constructor(asst_code, asst_name, asst_type, cmpy_code, device_id){
        this.asst_code = asst_code
        this.asst_name = asst_name
        this.asst_type = asst_type
        this.cmpy_code = cmpy_code
        this.device_id = device_id
    }
}

// 창고 데이터 생성 함수
export function getAsset(cmpy_code){
    let count = 0;
    let createCount = process.env.ASSET_GET_COUNT;
    
    let asst_type = getRandomAssetType(createCount)
    
    let assetArr = []
    while(count < createCount){
        let asst_code = 'as'+(count+1).toString();
        let asst_name = 'asset'+(count+1).toString().padStart(2, '0');
        let device_id = 'device3';
        if(asst_code && asst_name && asst_type[count] && cmpy_code && device_id){
            let temp = new Asset(asst_code, asst_name, asst_type[count], cmpy_code, device_id)
            assetArr.push(temp);
        }else {break;}
        count++
    }
    return assetArr
}

// 창고 타입 랜덤 선정
function getRandomAssetType(count){
    const assetType = process.env.ASSET_TYPE
    let aType = assetType.slice(2, assetType.length-2).split("', '")
    let arr = new Array();
    while(arr.length < count){
        arr.push(aType[Math.floor(Math.random()*10%aType.length)])
    }
    return arr
}
class Company {
    constructor(cmpy_code, cmpy_type, bn_no, name, address, ceo, phone){
        this.cmpy_code = cmpy_code
        this.cmpy_type = cmpy_type
        this.bn_no = bn_no
        this.name = name
        this.address = address
        this.ceo = ceo
        this.phone = phone
    }
}

// 회사 데이터 생성 함수
export function getCompany() {
    let count = 0;
    let createCount = process.env.COMPANY_GET_COUNT;
    
    let cmpy_type = getRandomCompanyType(createCount)
    let bn_no = createRandomBN_No(createCount)
    let name = getCompanyName()
    let address = getCompanyAddress()
    let ceo = createRandomCEO(createCount)
    let phone = createRandomPhone(createCount)
    
    let CompanyArr = []
    while(count < createCount){
        let cmpy_code = 'cp'+(count+1).toString();
        if(cmpy_code && cmpy_type[count] && bn_no[count] && name[count] && address[count] && ceo[count] && phone[count]){
            let temp = new Company(cmpy_code, cmpy_type[count], bn_no[count], name[count], address[count], ceo[count], phone[count])
            CompanyArr.push(temp);
        }else {break;}
        count++
    }
    return CompanyArr
}

// 회사 이름 가져오기
function getCompanyName(){
    const companyName = process.env.COMPANY_NAME
    return companyName.slice(2, companyName.length-2).split("', '")
}

// 회사 주소
function getCompanyAddress(){
    const companyAddress = process.env.COMPANY_ADDRESS
    return companyAddress.slice(2, companyAddress.length-2).split("', '")
}

// 회사 타입 랜덤 선정
function getRandomCompanyType(count){
    // develop, distribution
    const companyType = process.env.COMPANY_TYPE
    let cType = companyType.slice(2, companyType.length-2).split("', '")
    let arr = new Array();
    while(arr.length < count){
        arr.push(cType[Math.floor(Math.random()*10%2)])
    }
    return arr
}

//사업자번호 랜덤 생성
function createRandomBN_No(count){
    // 000-000-0000 10자리
    // 앞 3자리: 관할 세무서 번호(100~621)
    // 가운데 2자리: 사업자 성격(01~85)
    //뒤 5자리: 사업자별로 순차 부여 0001~9999
    let set = new Set();
    while(set.size < count){
        let fRandom = Math.random();
        let mRandom = Math.random();
        let lRandom = Math.random();

        let a = (Math.floor(fRandom*1000%621).toString()).padStart(3, '0')
        let b = (Math.floor(mRandom*1000%855).toString()).padStart(3, '0')
        let c = (Math.floor(lRandom*10000%9999).toString()).padStart(4, '0')
        set.add(`${a}-${b}-${c}`)
    }
    return [...set]
}

// CEO 이름 랜덤 생성
function createRandomCEO(count){
    // 김, 이, 박, 최, 정, 서, 남
    let firstName = ['김', '이', '박', '최', '정', '서', '남'];
    
    const companyCEO = process.env.COMPANY_CEO
    let cCEO = companyCEO.slice(2, companyCEO.length-2).split("', '")
    let set = new Set();
    while(set.size < count){
        let fRandom = Math.floor(Math.random() * 10 % 7);
        set.add(firstName[fRandom] + cCEO[Math.floor(Math.random()*100%cCEO.length)])
    }
    return [...set]
}

// 전화번호 랜덤 생성
function createRandomPhone(count){
    // 010-0000-0000
    let set = new Set();
    while(set.size < count){
        let fRandom = Math.floor(Math.random() * 10000 % 9999);
        let mRandom = Math.floor(Math.random() * 10000 % 9999);
        set.add(`010-${fRandom}-${mRandom}`)
    }
    return [...set]
}

// API_URL 이름 사용 금지
import axios from "axios";

// 상수 = 변경되지 않고 값이 일정한 수 = 대문자로 표기
const API_CLOTHES_URL = "http://localhost:8080/api/clothes";

/*
const 기능명칭 = {
    1번기능 :
            function (){
            },
    2번기능 :
            function (){
            },
    3번기능 :
            function (){
            },
}

export default 기능명칭;
외부 파일에서 기능명칭 안에 들어있는 기능을 사용하기 위해서는
기능명칭.1번기능();
와 같이 사용
* */
const apiClothesService = {

    getAllClothes:
        function (setClothes) {
            axios
                .get(API_CLOTHES_URL)
                .then(
                    (res) => {
                        setClothes(res.data)
                    }
                )
                .catch( //백엔드와 연결을 실패했을 경우
                    // err 는 자동으로 생성되는 문제가 err 변수이름에
                    // 자동으로 담김
                    (err) => {
                        alert("백엔드와 연결에 문제가 발생했습니다.");
                        console.error("clothesList Err : ", err);
                    }
                )
        },

    getClothesById:
        function (id, setClothe) {
            axios
                .get(API_CLOTHES_URL+"/"+id)
                .then(
                    (res) => {
                        setClothe(res.data);
                    }
                )
                .catch(
                    (err) => {
                        alert("백엔드와 연결할 수 없습니다.");
                        console.error("detail err : ", err);
                    }
                )
        },
    insertClothes:
        function () {

        },
    updateClothes:
        function () {

        },
    deleteClothes:
        function (id) {
            axios
                .delete(API_CLOTHES_URL + "/" + id)
                .then(
                    alert("제품을 삭제했습니다.")
                )
                .catch(
                    (err) => {
                        alert("백엔드에서 제품 삭제를 진행할 수 없습니다.");
                        console.error("err : " + err);
                    }
                )
        },
}

export default apiClothesService;
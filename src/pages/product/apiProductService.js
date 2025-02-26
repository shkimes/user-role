// ProductSearch
// ProductDetail
// 작성된 api 호출
// 분리하여 기능 사용

// 1. getProducts(keyword)
// 2. getSuggestions(keyword)
// 3. getProductById(keyword)


import axios from "axios";

const API_PRODUCT_URL = "http://localhost:8080/api/products";
const apiProductService = {
    getProducts:
        function (callback, errCallback) {
            axios
                .get(API_PRODUCT_URL)
                .then( // 백엔드 연결 성공
                    (res) => {
                        callback(res.data);
                    }
                )
                .catch( // 백엔드  연결 실패
                    (err) => {
                        alert("백엔드에서 문제가 발생했습니다.");
                        errCallback("제품 목록 보기 실패했습니다.");
                        console.error("err 발생한 문제를 개발자만 확인할 수 있도록 설정", err);
                    }
                )
        },
    getSuggestions:
        function (value, setSugs, setShow) {
            axios
                .get(`${API_PRODUCT_URL}/search?keyword=${value}`)
                .then(      // 백엔드 연결 성공
                    (res) => {
                        const 제안리스트 = res.data?.map(p => p.productName) || [];
                        setSugs(제안리스트);
                        setShow(true);
                    })
                .catch(     // 백엔드 연결 실패
                    (err) => {
                        // console.log 일 경우에는
                        // function () 소 괄호 내부에 err 작성해야하지만
                        // console.error 경우에는
                        // function () 소 괄호 내부에 err 작성할 필요 없음
                        console.error("추천 검색어 동작 실행 실패 : ", err);
                        setSugs([]);
                    }
                )
        },
    getProductById:
        function (productId, setProduct) {
            axios
                .get(`${API_PRODUCT_URL}/${productId}`)
                .then(
                    (res) => {
                        setProduct(res.data);  // res 는 변수이름을 ABC 나 XYZ 사용 가능하지만 .data 메서드나 변수명으로 활동하는 기능이기 때문에 이름 변경 불가
                    }
                )
                .catch(
                    (err) => {
                        console.error("백엔드 연결 실패 : ", err)
                        alert("백엔드에서 데이터 조회를 실패했습니다.");
                    }
                )
        },
    getSearchProduct:
        function (keyword, setProducts) {
            axios
                .get(`http://localhost:8080/api/products/search?keyword=${keyword}`)
                .then(
                    (res) => {
                        setProducts(res.data)
                    }
                )
                .catch(
                    (err) => {
                        console.log("검색 실패 : ", err)
                        setProducts([]); // 기존에 검색된 데이터가 있다면 지워버리기
                    }
                )
        },
    불러올기능명칭:
        function (keyword, setProducts) {
            axios
                .get(`http://localhost:8080/api/products/search?keyword=${keyword}`)
                .then(
                    (res) => {
                        setProducts(res.data)
                    }
                )
                .catch(
                    (err) => {
                        console.log("검색 실패 : ", err)
                        setProducts([]); // 기존에 검색된 데이터가 있다면 지워버리기
                    }
                )
        }
}
export default apiProductService;


























// import axios from "axios";
//
//  CONST 방법
//
// // 상품 검색 API 호출
// export const getProducts = (keyword) => {
//     return axios
//         .get(`http://localhost:8080/api/products/search`, { params: { keyword } })
//         .then((response) => response.data)
//         .catch((error) => {
//             console.error("Error fetching products:", error);
//
//         });
// };
//
// // 추천 검색어 API 호출
// export const getSuggestions = (keyword) => {
//     return axios
//         .get(`http://localhost:8080/api/products/search`, { params: { keyword } })
//         .then((response) => response.data?.map(p => p.productName) || [])
//         .catch((error) => {
//             console.error("Error fetching suggestions:", error);
//             return [];
//         });
// };
//
// // 특정 상품 상세 조회 API 호출
// export const getProductById = (productId) => {
//     return axios
//         .get(`http://localhost:8080/api/products/${productId}`)
//         .then((response) => response.data)
//         .catch((error) => {
//             console.error("Error fetching product details:", error);
//
//         });
// };
//

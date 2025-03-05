import {useEffect, useState} from "react";
import apiClothesService from "./apiClothesService";
import ClothesCard from "./ClothesCard";

const ClothesList = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        apiClothesService.getAllClothes(setClothes);
    }, []);

    const handleDelete = () => {
        apiClothesService.deleteClothes();
    }

    return (
        <div className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {clothes.map((clothe) => (
                        <ClothesCard

                            key={clothe.cid}
                            id={clothe.cid}
                            name={clothe.cname}
                            price={clothe.cprice}
                            image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"

                            onDelete={handleDelete} // 삭제 기능 함수를 onDelete 라는 명칭으로  ClothesCard 로 전달

                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ClothesList;
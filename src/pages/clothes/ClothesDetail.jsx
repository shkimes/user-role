import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import apiClothesService from "./apiClothesService";

const ClothesDetail = () => {
    const id = useParams();
    const [clothe, setClothe] = useState("");



    useEffect(() => {
        apiClothesService.getClothesById(id, setClothe);
    }, []);

    return (
        <div className="ClothesDetail-container">
            <h3>{clothe.cname}상세보기</h3>


        </div>
    )

};
export default ClothesDetail;
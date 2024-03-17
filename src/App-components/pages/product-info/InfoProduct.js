import './style/InfoProduct.css';
import { useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { app } from '../../../options/environment/env';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    oneElem,
    getOneElement
} from '../../../store/LinksSlice';
export default function InfoProducts() {
    const dbRef = ref(getDatabase(app));
    const dispatch = useDispatch();
    const elems = useSelector(getOneElement);
    console.log(elems);
    const params = useParams();
    console.log(params);
    useEffect(() => {
        get(child(dbRef, 'products')).then((snapshot) => {
            if (snapshot.exists()) {
                dispatch(oneElem(snapshot.val()));
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);
    Object.keys(elems).map(item => {
        if (params.nameProducts === elems[item]['patch']) {
            document.title = `${elems[item]['category']} ${elems[item]['name']}`;
        }
    });
    function back() {
        return window.history.go(-1);
    }
    return (
        <div className="big-card">
            <span onClick={back}>Назад до списку акцій</span>
            {Object.keys(elems).map(item =>
                (params.nameProducts === elems[item]['patch']) ?
                    <div className="one-card-product" key={item}>
                        <img src={elems[item]['imagePatch']} alt="" />
                        <div className="navigation">
                            <h1>{elems[item]['name']}</h1>
                            <p>{elems[item]['description']}</p>
                            <div className="info">
                                <div className="block">
                                    <b>Білки</b>
                                    {(elems[item]['protein'] !== "") ? elems[item]['protein'] : "-"}</div>
                                <div className="block">
                                    <b>Вуглеводи</b>
                                    {(elems[item]['carbo'] !== "") ? elems[item]['carbo'] : "-"}
                                </div>
                                <div className="block">
                                    <b>Жири</b>
                                    {(elems[item]['fat'] !== "") ? elems[item]['fat'] : "-"}
                                </div>
                                <div className="block">
                                    <b>Калорійність</b>
                                    {(elems[item]['calories'] !== "") ? elems[item]['calories'] : "-"}
                                </div>
                            </div>
                            <div className="weight">
                               Вага <b>{elems[item]['weight']}</b>
                            </div>
                            <div className="bottom-nav">
                                <div className="blocks-nav"></div>
                                <div className="blocks-nav"></div>
                            </div>
                        </div>
                    </div>
                    : undefined
            )
            }
        </div>
    );
}
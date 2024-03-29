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
    const params = useParams();
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
            document.title = `${elems[item]['name']}`;
        }
    });
    function back() {
        return window.history.go(-1);
    }
    return (
        <div className="big-card">
            <span onClick={back}>Назад до списку продуктів</span>
            {Object.keys(elems).map(item =>
                (params.nameProducts === elems[item]['patch']) ?
                    <div className="one-card-product" key={item}>
                        <img src={elems[item]['imagePatch']} alt="" />
                        <div className="navigation">
                            <h1>{elems[item]['name']}</h1>
                            <p>{elems[item]['description']}</p>
                            <div className="info">
                                <div className="block-all">
                                    <div className="block">
                                        <b>Білки</b>
                                        {(elems[item]['protein'] !== "") ? elems[item]['protein'] : "-"} г</div>
                                    <div className="block">
                                        <b>Вуглеводи</b>
                                        {(elems[item]['carbo'] !== "") ? elems[item]['carbo'] : "-"} г
                                    </div>
                                    <div className="block">
                                        <b>Жири</b>
                                        {(elems[item]['fat'] !== "") ? elems[item]['fat'] : "-"} г
                                    </div>
                                    <div className="block last">
                                        <b>Калорійність</b>
                                        {(elems[item]['calories'] !== "") ? elems[item]['calories'] : "-"} ккал
                                    </div>
                                </div>
                            </div>
                            <div className="weight">
                                Вага :<b>{elems[item]['weight']} г</b>
                            </div>
                            <div className="bottom-nav">
                                <div className="blocks-nav">
                                    <button>-</button>
                                    <span>1</span>
                                    <button>+</button>
                                </div>
                                <div className="price">
                                    <div className="price__block">
                                    <span className='span'>Всього :</span><b>{elems[item]['price']}</b> грн
                                    </div>
                                </div>
                            </div>
                            <button className='add-product-btn'>Добавити</button>
                        </div>
                    </div>
                    : undefined
            )
            }
        </div>
    );
}
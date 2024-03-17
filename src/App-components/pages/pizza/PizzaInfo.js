
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import {
    getOneElement,
    oneElem
} from '../../../store/LinksSlice';
import { getDatabase , ref ,get , child } from "firebase/database";
import { app } from "../../../options/environment/env";
export default function PizzaInfo(){
    const dbRef = ref(getDatabase(app));
    const elems = useSelector(getOneElement);
    console.log(elems);
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params);
    useEffect(() => {
        get(child(dbRef, 'products')).then((snapshot) => {
            if (snapshot.exists()) {
                dispatch(oneElem(snapshot.val()));
                Object.keys(snapshot.val()).map(item => 
                    (params.oneElement === snapshot.val()[item]['patch']) ?
                    document.title = `ᐅᐅПіца ${snapshot.val()[item]['name']}`
                    :undefined
                )
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);
    function backHistory() {
        return window.history.go(-1);
    }
    return(
        <div className="big-card-pizza">
            <span onClick={backHistory}>Повернутися назад</span>
            {Object.keys(elems).map(item =>
                (params.oneElement === elems[item]['patch']) ?
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
    )
}
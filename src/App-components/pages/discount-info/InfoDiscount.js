import './style/InfoDiscount.css';
import {getDatabase , ref , get , child} from 'firebase/database';
import { app } from '../../../options/environment/env';
import { useParams , Link } from "react-router-dom";
import { useDispatch , useSelector} from 'react-redux';
import {
    oneElem,
    getOneElement
} from '../../../store/LinksSlice';
import { useEffect } from 'react';
export default function InfoDiscount(){
    const params = useParams();
    const dispatch = useDispatch();
    const elems = useSelector(getOneElement)
    const dbRef = ref(getDatabase(app));
    useEffect(()=> {
        get(child(dbRef, 'discounts')).then((snapshot) => {
            if (snapshot.exists()) {
              dispatch(oneElem(snapshot.val()));
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
    },[]);
    Object.keys(elems).map(item =>{
      if(params.element === elems[item]['patch']){
          document.title = `${elems[item]['title']}`;
      }
    }) 
    return(
        <div className="big-card">
          <Link to="/discount">Назад до списку акцій</Link>
            {Object.keys(elems).map(item => 
                (params.element === elems[item]['patch']) ?
                <div className="one-card" key={item}>
                    <img src={elems[item]['imagePatch']} alt="" />
                    <h1>{elems[item]['title']}</h1>
                    <p>{elems[item]['description']}</p>
                </div>
                : undefined
                )}
        </div>
    );
}
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
    getCategories
} from '../../../store/AllCategories';

export default function Title() {
    const categories = useSelector(getCategories);
    const locationLink = useLocation();
    return (
        <h1>
            {Object.keys(categories).map(item => {
                if (locationLink.pathname.includes('/' + categories[item]['patch'])) {
                    return categories[item]['title'];
                }
            })}
        </h1>
    );
}
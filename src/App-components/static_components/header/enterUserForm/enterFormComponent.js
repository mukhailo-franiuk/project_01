import './style/EnterUserForm.css';
// import actions 
import {
    closeActionsForm,
    showRegUser
} from '../options/Actions';
import { useSelector } from 'react-redux';
import {
    getUsers
} from '../../../../store/CheckUser';

console.log();
export default function EnterForm() {
    const listUsers = useSelector(getUsers);
    function searchUsers(event){
        event.preventDefault();
        console.log('btn work');
    }
    return (
        <form className='enter-user' onSubmit={searchUsers}>
            <h2>Вхід в кабінет</h2>
            <div className="login">
                <span>Логін</span>
                <input type="text" name='loginUsers' />
            </div>
            <div className="password">
                <span>Пароль</span>
                <input type="password" name='passwordUsers' />
            </div>
            <div className="save-inform">
                <input type="checkbox" title='Зберегти вас?' />
                <span>Запам'ятати вас?</span>
            </div>
            <button type='submit' className='enter'>Вхід</button>
            <div className="link-reg">
                <span>Якщо ви не маєте акаунту в нас ми хотіли би запропонувати пройти простеньку реєстрацію і стати частиною нашої сім'ї! <b onClick={showRegUser}>Реєстрація</b></span>
            </div>
            <div className="close-form" onClick={closeActionsForm}>
                <div className="line-01"></div>
                <div className="line-02"></div>
            </div>
        </form>
    );
}
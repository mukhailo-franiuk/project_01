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

export default function EnterForm() {
    const listUsers = useSelector(getUsers);
    let statusUser = false;
    function searchUsers(event){
        event.preventDefault();
        let saveInfo = window.localStorage;
        Object.keys(listUsers).map(item => { if(event.target.elements.loginUsers.value === item){
                statusUser = true;
                if(statusUser === true && event.target.elements.loginUsers.value === listUsers[item]['login'] && event.target.elements.passwordUsers.value === listUsers[item]['password']){
                        saveInfo.setItem('name',listUsers[item]['name']);
                        saveInfo.setItem('login',listUsers[item]['login']);
                        saveInfo.setItem('password',listUsers[item]['password']);
                        saveInfo.setItem('status',listUsers[item]['status']);
                        if(saveInfo.getItem('status') === 'prime'){
                            window.location.href = 'console/admin';
                        }else{
                            window.location.href = `console/${saveInfo.getItem('login')}`;
                        }
                }
            }
    })
    }
    return (
        <form className='enter-user' onSubmit={searchUsers}>
            <h2>Вхід в кабінет</h2>
            <div className="login">
                <span>Логін</span>
                <input type="text" name='loginUsers'/>
            </div>
            <div className="password">
                <span>Пароль</span>
                <input type="password" name='passwordUsers' />
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
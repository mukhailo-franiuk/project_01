import './style/RegistracionFormStyle.css';
// import actions 
import {
    showEnterUser,
    closeActionsForm
} from '../options/Actions';
export default function RegFormComponent() {
    return (
        <form className="reg-users close-reg-user">
            <h2>Реєстрація</h2>
            <div className="name">
                <span>Ім'я</span>
                <input type="text" name='regName' />
            </div>
            <div className="login">
                <span>Логін</span>
                <input type="text" name='regLogin' />
            </div>
            <div className="password">
                <span>Пароль</span>
                <input type="password" name='regPass' />
            </div>
            <div className="repeat-password">
                <span>Повторити пароль</span>
                <input type="password" name='regRepPass' />
            </div>
            <div className="save-inform">
                <input type="checkbox" title='Зберегти вас?' />
                <span>Зберегти ваші данні?</span>
            </div>
            <button type='submit' className='registr'>Реєстрація</button>
            <div className="link-reg">
                <span>Якщо ви вже зареєстровані к нас тоді ввійдіть під своїми логіном і паролем <b onClick={showEnterUser}>Вхід</b></span>
            </div>
            <div className="close-form" onClick={closeActionsForm}>
                <div className="line-01"></div>
                <div className="line-02"></div>
            </div>
        </form>
    );
}
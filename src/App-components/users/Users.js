import './style/Users.css';

export default function Users(){
    return(
        <div className="users-container">
            <h2>Users</h2>
            <button onClick={()=>{
                window.localStorage.clear();
                window.location.replace('/')
            }}>close</button>
        </div>
    );
}
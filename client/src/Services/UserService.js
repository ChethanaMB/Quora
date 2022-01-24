import packageJson from '../../package.json';
class UserService
{
    saveUser = (data)=>{
        return fetch(`http://localhost:8082/web/register`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }

    loginUser = (data)=>{
        return fetch(`http://localhost:8082/web/login`,{
            method : 'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
    }

}
var obj = new UserService()
export default obj;
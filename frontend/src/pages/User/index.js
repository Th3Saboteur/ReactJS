import React, {useState, useEffect} from 'react';
import api from '../../services/api'; //Importa api do axios
import {Link} from 'react-router-dom'; //Substitui o link do html
import './style.css';

export default function User(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        api.get('users').then(Response=>{ //Utiliza o método get através da api para recuperar os usuários 
            setUsers(Response.data); //Seta a lisa de usuários com os dados que vem da resposta
        }); 
    }, []); //[] indiica que sempre que o componente iniciar a função é chamada (uma única vez)
    //console.log(users);

    async function handleDelete (id){
        try{
            await api.delete(`/users/${id}`); //Tenta deletar
            setUsers(users.filter(user => user.id != id)); //Ignora o usuário deletado da lista de exibção (aplica o filtro para cada usuário)
        }
        catch(err){
            alert("Erro ao tentar deletar o usuário")
        }
    }

    return (
        <div id="user-container">
            <h1>Lista de Usuários</h1> 
            <Link className="button" id="link" to={"/create"}>Criar</Link>
            <ul className="user-list">
                {users.map(user=>( //Percorve via map e faz um li para cada item
                    <li key={user.id}>
                        <strong>Nome</strong>
                        <p>{user.name}</p>
                        <strong>Email</strong>
                        <p>{user.email}</p>
                        <strong>Idade</strong>
                        <p>{user.idade}</p>
                        <strong>Empresa</strong>
                        <p>{user.empresa}</p>
                        <div className="actions">
                            <button className="button" onClick={()=>handleDelete(user.id)} type="button">Deletar</button>
                            <Link className="button"  to={`/update/${user.id}`}>Acessar</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
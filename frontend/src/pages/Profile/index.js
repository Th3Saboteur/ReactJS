import React, {useState, useEffect} from 'react'; 
import {Link, useHistory, useParams} from 'react-router-dom'; //Link para substituição o link html, useHistory para navegação, useParams para parâmetros  
import './style.css';
import api from '../../services/api'; //Imorta api de conexão com backend

export default function Profile(){
    const {id} = useParams(); //Recebe o id do parâmetro para update
    const history = useHistory(); //Em substituição ao 'to=""'
    const initUser = { //Usuário default para ser salvo
        name: '',
        email: '',
        idade: 0,
        empresa: ''
    }
    const [user, setUser] = useState(initUser); //Usa função setUser para atualizar o iniUser

    useEffect(()=>{ //Ao carregar o componente 
        if(id){ //Para verificar se existe id 
            api.get(`/users/${id}`).then(response=>{
                console.log(response.data);
                setUser(...response.data); //Atualiza o user desestruturanda a resposta(ignora os campos que não tem)
            });
        } 
    }, []);

    function onSubmit(ev){ //Recebe um evento (submissão)
        ev.preventDefault(); //Retira recarregamento da submissão
        const method = id ? 'put' : 'post'; //Se houver id variável recebe método put, senão método post
        const url = id ? `/users/${id}` : `/users`; //Url também muda caso tenho id ou não 
        api[method](url, user).then((response)=>{
            history.push('/');
        }); //Salva o usuário via api e, caso dê certo, retorna a página padrão
    }

    function onChange(ev){ //Função para ação de mudança de campos
        const {name, value} = ev.target; //Captura o campo e seu respectivo valor
        setUser({...user, [name]:value}) //Desestrutura o usuário, pegando o campo capturado (ignora os outros) e o atualizando
        //console.log(user);
    }

    return (
        <div id="profile-container">
            <h1>Cadastro</h1>
            <form onSubmit={onSubmit}>
                <strong>Nome:</strong>
                <input name="name" onChange={onChange} value={user.name}/>
                <strong>Email:</strong>
                <input  type="email" name="email" onChange={onChange} value={user.email}/>
                <strong>Idade:</strong>
                <input name="idade" onChange={onChange} value={user.idade}/>
                <strong>Empresa:</strong>
                <input name="empresa" onChange={onChange} value={user.empresa}/>
                <div className="actions">
                    <Link className="button" onClick={()=>history.push('/')}>Voltar</Link>
                    <button className="button" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
}
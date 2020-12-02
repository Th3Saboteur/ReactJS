import React from 'react'; //Importa para indicar que a aplicação é do tipo react
import ReactDOM from 'react-dom'; //Importa para mmanipular a árvore dom (html)
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './pages/Header/index';

ReactDOM.render( //Renderiza o html
  <React.StrictMode>
    <Header title="My User App"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //Embuti dentro da tag root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

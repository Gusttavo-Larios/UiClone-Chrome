import React from 'react';
import ReactDOM from 'react-dom';

// import'./img/addPage.png';

//Import elements
import App from './App';
import Header from './Header'
// import AddPage from './AddPage'

ReactDOM.render( 
  <React.StrictMode>
    <Header/>
    <App />
    {/* <AddPage/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

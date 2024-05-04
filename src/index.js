import React from 'react'
import ReactDOM from 'react-dom/client';
import './styles.css'
import { ListTasksApp } from './components/ListTasksApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ListTasksApp />
    </React.StrictMode>
  );
 
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Header } from './header';
import { Nav_search } from './header';
import reportWebVitals from './reportWebVitals';
import {OtherNAv,PagesInterface,LaoutsInterface,Dashboard,Core,Interface,Addons,ChartsAddon,Table} from './body';
import { PrintAll,Main,TableAll,TableRowLabel} from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header name="Start bootstrap">
            <Nav_search/>
      </Header>
      <OtherNAv>
          <Core>
              <Dashboard/>
          </Core>
          <Interface>
              <LaoutsInterface/>
              <PagesInterface/>
          </Interface>
          <Addons>
              <ChartsAddon/>
              <Table/>
          </Addons>
      </OtherNAv>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

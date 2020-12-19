import './sass/main.scss';
import App from './App';
import Location from './geolocation';
import FetchApiGent from './api/openDataApi';
import qrCode from './api/qrCode';

import { HomeComponent, ProductsComponent, ProductComponent } from './Components';

const initApp = async () => {
  const appContainer = document.getElementById('appContainer');
  const app = new App(appContainer);

  document.getElementById('showLocation').addEventListener('click', async (e) => {
    e.preventDefault();
    Location.displaySnapshot();
  });
  // console.log(await FetchApiGent.fetch());
  qrCode.addSripts();
  qrCode.generate();

  // add components to app
  app.addComponent(new HomeComponent());
  app.addComponent(new ProductsComponent());
  app.addComponent(new ProductComponent());


  // init service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./newSw.js');
  }
};

window.addEventListener('load', initApp);

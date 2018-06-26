import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

// triggers the swapping process. 
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}

// <AppContainer> is a wrapper component from React-Hot-Loader that handles
// reloading the application and sending errors if anything goes awry.
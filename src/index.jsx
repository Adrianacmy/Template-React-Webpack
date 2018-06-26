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

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}


/*eslint-enable */


// triggers the swapping process. 
//These special tags disable ESLint right before the first appearance of module, then immediately re-enable it after the block of code; essentially telling ESLint to ignore these few lines
// <AppContainer> is a wrapper component from React-Hot-Loader that handles
// reloading the application and sending errors if anything goes awry.
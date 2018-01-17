import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MessageList from './MessageList/Container';
import Controller from './Controller/Container';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <MessageList />
        <Controller />
      </MuiThemeProvider>
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

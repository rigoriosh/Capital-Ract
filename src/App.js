
import { createContext } from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

function App() {
  const MenuContext = createContext({});
  return <>
    <Provider store = { store}>      
      <MenuContext.Provider>
        <AppRouter/>
      </MenuContext.Provider>
    </Provider>  
  
  </>

  
}

export default App;

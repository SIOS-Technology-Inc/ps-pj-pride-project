import { RecoilRoot } from 'recoil';

import './App.css';
import { RouterConfig } from './router/RouterConfig';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

import { RecoilRoot } from 'recoil';

import './App.css';
import { RouterConfig } from './router/RouterConfig';

function App() {
  return (
      <RecoilRoot>
        <RouterConfig />
      </RecoilRoot>
  );
}

export default App;

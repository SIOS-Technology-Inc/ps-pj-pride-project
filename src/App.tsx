import { RecoilRoot } from 'recoil';

import './App.css';
import { RouterConfig } from './router/RouterConfig';
import { AzureConfigComponent } from './utilities/AzureConfigComponent';

function App() {
  return (
    <AzureConfigComponent>
      <RecoilRoot>
        <RouterConfig />
      </RecoilRoot>
    </AzureConfigComponent>
  );
}

export default App;

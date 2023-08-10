import { BrowserRouter } from 'react-router-dom';

import { RouterConfig } from './router/RouterConfig';
import { RouterAuthenticatedCheck } from './utilities/RouterAuthenticatedCheck';

function App() {
  return (
    <BrowserRouter>
      <RouterAuthenticatedCheck>
        <RouterConfig />
      </RouterAuthenticatedCheck>
    </BrowserRouter>
  );
}

export default App;

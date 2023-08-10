import { BrowserRouter } from 'react-router-dom';

import { RouterConfig } from './router/RouterConfig';
import { RouterAuthenticatedCheck } from './router/RouterAuthenticatedCheck';

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

import { BrowserRouter } from 'react-router-dom';

import { RouterAuthenticatedCheck } from './router/RouterAuthenticatedCheck';
import { RouterConfig } from './router/RouterConfig';

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

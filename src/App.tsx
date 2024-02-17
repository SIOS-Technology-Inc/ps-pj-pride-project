import { BrowserRouter } from 'react-router-dom';

import { TopAnimation } from './components/modules/TopAnimation';
import { RouterConfig } from './router/RouterConfig';

function App() {
  return (
    <>
      <TopAnimation />
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
}

export default App;

import { BrowserRouter } from 'react-router-dom';

import { OpeningAnimation } from './components/common/OpeningAnimation/OpeningAnimation';
import { RouterConfig } from './router/RouterConfig';

function App() {
  return (
    <>
      <OpeningAnimation />
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
}

export default App;

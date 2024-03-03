import { BrowserRouter } from 'react-router-dom';

import { TopAnimation } from '@/components/modules/TopAnimation2';

import { RouterConfig } from './router/RouterConfig';

function App() {
  return (
    <>
      {/* <TopAnimation /> */}
      <TopAnimation />
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
}

export default App;

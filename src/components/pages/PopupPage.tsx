import { useState } from 'react';

import { PopUpComponent } from '../modules/PopupComponent';

export const PopupPage = () => {
  const [popupFlag, setPopupFlag] = useState<boolean>(false);
  return (
    <section className="h-[2000px] w-full">
      <button onClick={() => setPopupFlag(true)}>popup</button>
      <PopUpComponent viewFlag={popupFlag} setViewFlag={setPopupFlag} />
    </section>
  );
};

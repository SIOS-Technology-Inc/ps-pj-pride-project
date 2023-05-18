import axios from 'axios';
import { atom, selector } from 'recoil';

export const userUidState = atom<string>({
  key: 'userUidState',
});

export const authenticatedState = atom<boolean>({
  key: 'authenticatedState',
  default: false,
});

export const testState = selector<boolean>({
  key: 'testState',
  get: async ({}) => {
    const data = await axios.get('https://localteset.com/yesyes');
    console.log(data);

    return true;
  },
});

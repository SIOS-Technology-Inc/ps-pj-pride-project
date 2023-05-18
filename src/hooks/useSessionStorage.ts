import { UserDataType } from '@/types/type';

export const useSessionStorage = () => {
  // 情報取得
  const getUserData = (): UserDataType | undefined => {
    const temp = sessionStorage.getItem('userData');
    if (temp != null) {
      return JSON.parse(temp) as UserDataType;
    }
    return;
  };

  // 編集・追加
  const setUserData = (userData: UserDataType) => {
    const temp = JSON.stringify(userData);
    sessionStorage.setItem('userData', temp);
  };

  // 削除
  const deleteUserData = () => {
    sessionStorage.removeItem('userData');
  };
  return { getUserData, deleteUserData, setUserData };
};

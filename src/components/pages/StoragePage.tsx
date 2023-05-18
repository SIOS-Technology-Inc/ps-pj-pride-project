import { ObjectSessionStorageComponent } from '@/components/modules/ObjectSessionStorageComponent';
import { SimpleSessionStorageComponet } from '@/components/modules/SimpleSessionStorageTestComponent';

export const StoragePage = () => {
  return (
    <>
      <main className="flex flex-col gap-5">
        <SimpleSessionStorageComponet />
        <ObjectSessionStorageComponent />
      </main>
    </>
  );
};

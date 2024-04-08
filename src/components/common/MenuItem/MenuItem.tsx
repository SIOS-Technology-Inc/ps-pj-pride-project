type MenuItemProps = {
  path: () => void;
  active: boolean;
  text: string;
  imageOnly?: boolean;
  image?: string;
};

export const MenuItem = (props: MenuItemProps) => {
  const { path, active, image, text, imageOnly } = props;
  return (
    <>
      {imageOnly ? (
        <div onClick={path} className={active ? '' : 'opacity-40'}>
          <img src={image} alt={text} className="w-32 object-contain hover:cursor-pointer" />
        </div>
      ) : (
        <div onClick={path} className={active ? '' : 'opacity-40'}>
          {image && (
            <img src={image} alt={text} className="w-32 object-contain hover:cursor-pointer" />
          )}
          <span className="text-lg font-bold">{text}</span>
        </div>
      )}
    </>
  );
};

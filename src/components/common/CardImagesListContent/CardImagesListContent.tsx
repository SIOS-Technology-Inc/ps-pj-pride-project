type CardImagesListContentProps = { label: string; contents: string[] };

export const CardImagesListContent = (props: CardImagesListContentProps) => {
  const { contents, label } = props;
  return (
    <>
      <ul className="flex grow flex-col gap-1 text-lg">
        <li className="text-gray">{label}</li>
        <li className="flex h-auto min-h-[40px] flex-row flex-wrap gap-3">
          {contents.length == 0 ? (
            <span className="flex w-full items-center justify-start">いいねがほしいよ～</span>
          ) : (
            contents.map((content, index) => (
              <img
                key={content + index}
                src={content}
                alt=""
                className="h-10 w-10 rounded-full object-contain"
              />
            ))
          )}
        </li>
      </ul>
    </>
  );
};

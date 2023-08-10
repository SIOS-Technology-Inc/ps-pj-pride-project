type ViewContentProps = {
  label: string;
  content: string;
};
export const ViewOneLineContent = (props: ViewContentProps) => {
  const { content, label } = props;
  return (
    <>
      <ul className="flex grow flex-row justify-between text-lg">
        <li className="text-gray">{label}</li>
        <li className="text-black">{content}</li>
      </ul>
    </>
  );
};
export const ViewMultiLineContent = (props: ViewContentProps) => {
  const { content, label } = props;
  return (
    <>
      <ul className="flex grow flex-col gap-1 text-lg">
        <li className="text-gray">{label}</li>
        <li className="text-black">{content}</li>
      </ul>
    </>
  );
};
type ViewMultiLineImgListContentType = {
  label: string;
  contents: string[];
};
export const ViewMultiLineImgListContent = (props: ViewMultiLineImgListContentType) => {
  const { contents, label } = props;
  return (
    <>
      <ul className="flex grow flex-col gap-1 text-lg">
        <li className="text-gray">{label}</li>
        <li className="flex h-auto min-h-[40px] flex-row flex-wrap gap-3">
          {contents.length == 0 ? (
            <span className="flex w-full items-center justify-center">いいねがほしいよ～</span>
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

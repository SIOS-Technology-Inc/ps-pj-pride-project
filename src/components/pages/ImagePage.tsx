export const ImagePage = () => {
  const imageList = [
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
    'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
  ].sort();
  return (
    <>
      {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="grid gap-4">
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[0]} />
          </div>
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[1]} />
          </div>
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[2]} />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[3]} />
          </div>
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[4]} />
          </div>
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[5]} />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[6]} />
          </div>
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[7]} />
          </div>
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[8]} />
          </div>
        </div>
        <div className="grid gap-4">
          <div className="m-auto ">
            <img className="block h-auto max-w-full rounded-lg object-contain" src={imageList[9]} />
          </div>
          <div className="m-auto ">
            <img
              className="block h-auto max-w-full rounded-lg object-contain"
              src={imageList[10]}
            />
          </div>
          <div className="m-auto ">
            <img
              className="block h-auto max-w-full rounded-lg object-contain"
              src={imageList[11]}
            />
          </div>
        </div>
      </div> */}
      <div className="columns-2 md:columns-3 lg:columns-4">
        <img className="mb-4 rounded-md object-contain" src={imageList[0]} />
        <img className="mb-4 rounded-md" src={imageList[1]} />
        <img className="mb-4 rounded-md" src={imageList[2]} />
        <img className="mb-4 rounded-md" src={imageList[3]} />
        <img className="mb-4 rounded-md" src={imageList[4]} />
        <img className="mb-4 rounded-md" src={imageList[5]} />
        <img className="mb-4 rounded-md" src={imageList[6]} />
        <img className="mb-4 rounded-md" src={imageList[7]} />
        <img className="mb-4 rounded-md" src={imageList[8]} />
        <img className="mb-4 rounded-md" src={imageList[9]} />
        <img className="mb-4 rounded-md" src={imageList[10]} />
        <img className="mb-4 rounded-md" src={imageList[11]} />
      </div>
    </>
  );
};

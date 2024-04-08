import FooterLogoFox1 from 'src/assets/fox1.png';
import FooterLogoFox2 from 'src/assets/fox2.png';

export const Footer = () => {
  return (
    <footer className="flex h-36 w-full flex-row justify-end bg-gray px-[30px]">
      <img src={FooterLogoFox1} className="w-32 object-contain" alt="" />
      <img src={FooterLogoFox2} className="w-32 object-contain" alt="" />
    </footer>
  );
};

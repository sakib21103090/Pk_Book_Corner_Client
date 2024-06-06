import  { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';

export const Gallery = () => {
    useEffect(() => {
        Aos.init({
          multiple: true,
        });
      }, []);
  return (
    <div>
    <div>
        <h4 className="text-center font-bold text-black text-3xl m-6 p-6">Book Gallery</h4>
    </div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-4 mx-32">
<div className="aos-item" data-aos="fade-up">
  <img   src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px] rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px] rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px]  rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px]  rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px]  rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px]  rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px] rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px] rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px] rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px] rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px] rounded" />
</div>
<div className="aos-item" data-aos="fade-up">
  <img src={`https://i.ibb.co/pnGJwLn/image.png`} alt="Image" className="w-[460px] h-[250px] rounded" />
</div>

{/* Add more images as needed */}
</div>
</div>

  )
}

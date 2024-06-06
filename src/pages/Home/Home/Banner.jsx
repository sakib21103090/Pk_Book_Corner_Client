import book1 from '../../../assets/Book1.jpg';
import book2 from '../../../assets/book2.jpg';
import book3 from '../../../assets/book3 (2).jpg';
import book4 from '../../../assets/Book4.jpg';
import book5 from '../../../assets/book5.jpg';



const Banner = () => {
    return (
        <div className="carousel md:h-[650px]  max-w-screen-2xl md:pt-20 md:mx-20">
        <div id="slide1" className="carousel-item relative w-full"> {/* slider one */}
          <img src={book1} className="w-full  rounded-md" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
             <div className='text-white lg:w-50 sm:w-1/2 m-6'>
             <h3 className='lg:text-6xl md:text-4xl font-bold sm:text-lg text-yellow-300 mb-4 text-lg '  >Welcome to the  Pk Book Corner</h3>
              <p className="lg:text-2xl md:text-xl text-[10px] max-w-xl"> Find solace and wisdom in our collection of sacred texts, spiritual insights, and religious studies. Explore diverse faiths and traditions, deepen your understanding, and nurture your soul.</p>
             </div>
      
      
          </div>
          <div className="absolute flex  justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide5" className="btn btn-circle  bg-green-600 mr-4">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 

        <div id="slide2" className="carousel-item relative w-full"> {/* slider 2 */}
          <img src={book2}  className="w-full rounded-xl" />
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
          <div className='text-white lg:w-50 sm:w-1/2 m-6'>
          <h3 className='  lg:text-6xl md:text-4xl font-bold sm:text-lg text-yellow-300 mb-4 text-lg'  >Welcome to the  Pk Book Corner</h3>
              <p className="lg:text-2xl md:text-xl text-[10px] max-w-xl ">Empower your mind with our educational treasures! Dive into a world of learning with textbooks, academic resources, and enriching materials for all ages and interests. </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle bg-green-600 mr-4">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={book3}  className="w-full rounded-lg" />{/* slider 3 */}
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
          <div className='text-white lg:w-50 sm:w-1/2 m-6'>
          <h3 className='  lg:text-6xl md:text-4xl font-bold sm:text-lg text-yellow-300 mb-4 text-lg'  >Welcome to the  Pk Book Corner</h3>
              <p className="lg:text-2xl md:text-xl text-[10px] max-w-xl "> Spark the imagination and curiosity of young minds with our delightful selection of childrens books.  </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle bg-green-600 mr-4">❮</a> 
            <a href="#slide4" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={book4}  className="w-full rounded-lg" />{/* slider 4 */}
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
          <div className='text-white lg:w-50 sm:w-1/2 m-6'>
          <h3 className=' lg:text-6xl md:text-4xl font-bold sm:text-lg text-yellow-300 mb-4 text-lg'  >Welcome to the  Pk Book Corner</h3>
              <p className="lg:text-2xl md:text-xl text-[10px] max-w-xl "> Embark on a journey of discovery with our scientific and technological wonders. </p>
             </div>
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle  bg-green-600 mr-4">❮</a> 
            <a href="#slide5" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={book5}  className="w-full rounded-lg" />{/* slider 5 */}
          <div className="absolute rounded-lg flex items-center transform h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
          <div className='text-white lg:w-50 sm:w-1/2 m-6'>
          <h3 className='  lg:text-6xl md:text-4xl font-bold sm:text-lg text-yellow-300 mb-4 text-lg'  >Welcome to the  Pk Book Corner</h3>
              <p className="lg:text-2xl md:text-xl text-[10px] max-w-xl ">Explore resources on nutrition, fitness, mental health, and self-care to enhance your well-being and vitality. </p>
             </div>
      
      
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle  bg-green-600  mr-4">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-red-600 ">❯</a>
          </div>
          
          
        </div>
      </div>
    )
};

export default Banner;
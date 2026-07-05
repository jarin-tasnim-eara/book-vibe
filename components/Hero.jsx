import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full bg-[#f3f8f3] px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto rounded-xl mt-6">
   
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
          Books to freshen up <br /> your bookshelf
        </h1>
        <Link href="/books">
          <button className="mt-6 px-6 py-3 bg-[#23BE0A] text-white rounded-md font-semibold hover:bg-pink-400">
            View The List
          </button>
        </Link>
      </div>

      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image
          src="/images/book.png"
          alt="Featured Book"
          width={200}
          height={280}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

    </div>
  );
};

export default Hero;
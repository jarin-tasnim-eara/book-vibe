import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const BookCard = ({ book }) => {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer">

       
        <div className="w-full h-[180px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          <Image
            src={book.image}
            alt={book.title}
            width={120}
            height={160}
            className="object-contain h-full"
          />
        </div>

        <div className="flex gap-2 mt-3 flex-wrap">
          {book.categories.map((cat, index) => (
            <span key={index} className="text-[11px] px-2 py-1 bg-green-100 text-green-700 rounded-full"> {cat} </span>
          ))}
        </div>

      
        <h3 className="text-[14px] font-bold text-gray-800 mt-2 leading-snug">{book.title}</h3>

        <p className="text-[12px] text-gray-500 mt-1">By : {book.author}</p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-[12px] text-gray-500">{book.genre}</span>
          <div className="flex items-center gap-1">
            <span className="text-[12px] text-gray-600">{book.rating}</span>
            <FaStar className="text-yellow-400 text-[12px]"/>
          </div>
        </div>

      </div>
    </Link>
  );
};

export default BookCard;
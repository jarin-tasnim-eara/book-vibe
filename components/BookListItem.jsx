import Link from 'next/link';
import Image from 'next/image';
import {FaMapMarkerAlt,FaUser,FaFileAlt} from 'react-icons/fa';

const BookListItem =({ book }) =>{
  return(
    <div className="border border-gray-200 rounded-xl p-4 mb-4">
      <div className="flex flex-col sm:flex-row gap-4">

        <div className="w-full sm:w-[110px] h-[140px] bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
          <Image src={book.image} alt={book.title} width={90} height={120} className="object-contain h-full"/>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800">{book.title}</h3>
          <p className="text-sm text-gray-500 mt-1">By : {book.author}</p>

          <div className="flex items-center gap-2 mt-2 flex-wrap text-sm">
            <span className="font-medium text-gray-700">Tag</span>
            {book.categories.map((cat, i) => (
              <span key={i} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs"> #{cat}</span>
            ))}
            <span className="text-gray-500 ml-2 flex items-center gap-1">
              <FaMapMarkerAlt className="text-gray-400"/> Year of Publishing: {book.yearOfPublishing}</span>
          </div>

          <div className="flex items-center gap-6 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <FaUser className="text-gray-400" /> Publisher: {book.publisher}</span>
            <span className="flex items-center gap-1">
              <FaFileAlt className="text-gray-400"/> Page {book.pages}</span>
          </div>

          <hr className="my-3 border-gray-200"/>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"> Category: {book.genre}</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs">Rating: {book.rating}</span>
            <Link href={`/books/${book.id}`} className="ml-auto">
            <button className="px-5 py-1.5 bg-[#23BE0A] text-white rounded-md hover:bg-green-600 text-sm font-medium"> View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListItem;
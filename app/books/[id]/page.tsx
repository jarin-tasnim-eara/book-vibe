import Image from 'next/image';
import books from '../../../data/books.json';

export default async function BookDetails({ params }: {params: Promise<{id: string }>}) {
  const {id} = await params;
  const book = books.find(b => b.id === parseInt(id));
  
  if (!book){
    return (
      <div className="text-center mt-20 text-gray-500">
        Book not found
      </div>
    );
  }

  return(
    <main className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-10 items-start">

       
        <div className="w-full md:w-[300px] shrink-0 bg-gray-100 rounded-xl flex items-center justify-center p-6">
          <Image src={book.image} alt={book.title} width={200} height={280} className="object-contain rounded"/>
        </div>


        <div className="flex-1">

          <h1 className="text-3xl font-bold text-gray-800">{book.title}</h1>
          <p className="text-gray-500 mt-2">By : {book.author}</p>
       
          <hr className="my-4 border-gray-200"/>
          <p className="text-gray-600">{book.genre}</p>
          <hr className="my-4 border-gray-200"/>

          <div>
            <p className="text-gray-800">
              <span className="font-bold">Review : </span>
              {book.review}
            </p>
          </div>

          <hr className="my-4 border-gray-200"/>
      
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-gray-700 font-medium">Tag</span>
            {book.categories.map((cat,i) =>(
              <span
                key={i}
                className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium"> #{cat}</span>
            ))}
          </div>

          <hr className="my-4 border-gray-200"/>

          <div className="flex flex-col gap-2 text-sm">
            <div className="flex gap-4">
              <span className="text-gray-500 w-[140px]">Number of Pages:</span>
              <span className="font-semibold text-gray-800">{book.pages}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 w-[140px]">Publisher:</span>
              <span className="font-semibold text-gray-800">{book.publisher}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 w-[140px]">Year of Publishing:</span>
              <span className="font-semibold text-gray-800">{book.yearOfPublishing}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 w-[140px]">Rating:</span>
              <span className="font-semibold text-gray-800">{book.rating}</span>
            </div>
          </div>

          <hr className="my-4 border-gray-200"/>
          
          <div className="flex gap-4 mt-2">
            <button className="px-6 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 font-medium">Read</button>
            <button className="px-6 py-2 bg-cyan-400 text-white rounded-md hover:bg-cyan-500 font-medium">Wishlist</button>
          </div>

        </div>
      </div>
    </main>
  );
}

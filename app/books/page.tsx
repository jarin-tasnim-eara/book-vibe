"use client";

import { useState } from 'react';
import BookListItem from '../../components/BookListItem';
import books from '../../data/books.json';

const sortOptions =[
  { key:'rating',label:'Rating'},
  { key:'pages',label:'Number of pages'},
  { key:'year',label:'Publisher year'},
];

export default function BooksPage(){
  const [activeTab,setActiveTab] =useState('read');
  const [sortBy,setSortBy] = useState<string | null>(null);
  const [dropdownOpen,setDropdownOpen] =useState(false);

  // Sorted copy — original array untouched
  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy==='rating') return b.rating - a.rating;
    if (sortBy==='pages') return b.pages - a.pages;
    if (sortBy==='year') return b.yearOfPublishing - a.yearOfPublishing;
    return 0;
  });

  const handleSortSelect =(key:string) =>{
    setSortBy(key);
    setDropdownOpen(false);
  };

  return(
    <main className="max-w-4xl mx-auto px-6 py-10">

      <div className="bg-gray-100 rounded-xl py-4 text-center mb-6">
        <h1 className="text-xl font-bold text-gray-800">Books</h1>
      </div>

    
      <div className="flex justify-center mb-8 relative">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="px-5 py-2 bg-[#23BE0A] text-white rounded-md flex items-center gap-2 hover:bg-pink-400 text-sm" > Sort By </button>

        {dropdownOpen && (
          <div className="absolute top-11 bg-gray-100 rounded-md shadow-md py-2 w-[180px] text-center z-10">
            {sortOptions.map((opt) => (
              <div key={opt.key} onClick={()=> handleSortSelect(opt.key)} className={`py-1.5 text-sm cursor-pointer hover:text-green-600 ${ sortBy===opt.key ? 'text-green-600 font-medium' : 'text-gray-600'
                }`}> {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-8 border-b border-gray-200 mb-6">
        <button onClick={()=>setActiveTab('read')}className={`pb-2 text-sm ${activeTab === 'read' ? 'border-b-2 border-green-500 text-gray-800 font-medium' : 'text-gray-400'}`}> Read Books</button>
        <button onClick={()=>setActiveTab('wishlist')}className={`pb-2 text-sm ${activeTab === 'wishlist' ? 'border-b-2 border-green-500 text-gray-800 font-medium' : 'text-gray-400'}`} >Wishlist Books </button>
      </div>

      <div className="flex flex-col">
        {sortedBooks.map((book) =>(
          <BookListItem key={book.id} book={book}/>
        ))}
      </div>

    </main>
  );
}
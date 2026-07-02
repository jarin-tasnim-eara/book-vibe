import Hero from '../components/Hero';
import BookGrid from '../components/BookGrid';


async function getBooks() {
  const res= await fetch('http://localhost:3000/books.json', {
    
  });
  return res.json();
}

export default async function Home() {
  const books= await getBooks();

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <Hero/>
        <BookGrid books={books}/>
      </div>
    </main>
  );
}
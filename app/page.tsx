import Hero from '../components/Hero';
import BookGrid from '../components/BookGrid';
import books from '../data/books.json';


export default function Home() {

  return (
    <main className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <Hero/>
        <BookGrid books={books}/>
      </div>
    </main>
  );
}
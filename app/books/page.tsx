import BookGrid from '../../components/BookGrid';

async function getBooks() {
  const res = await fetch('http://localhost:3000/books.json', {
    cache: 'no-store'
  });
  return res.json();
}

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <main className="bg-white min-h-screen">
      <BookGrid books={books} />
    </main>
  );
}
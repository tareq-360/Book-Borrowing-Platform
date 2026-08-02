import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found | Online Book Borrowing Platform</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 py-12">
        <div className="max-w-md w-full text-center bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
          
          
          <h1 className="text-8xl font-black bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent leading-none mb-4">
            404
          </h1>

          
          <h2 className="text-2xl font-bold text-slate-100 mb-3">
            Oops! Page Not Found
          </h2>

         
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            We can't seem to find the book or page you are looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>

         
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/" 
              className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg text-sm transition-colors duration-200"
            >
              Go Back Home
            </Link>

            <Link 
              href="/catalog" 
              className="px-5 py-2.5 bg-transparent hover:bg-slate-700 text-sky-400 font-semibold border border-sky-600 rounded-lg text-sm transition-colors duration-200"
            >
              Browse Books Instead
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
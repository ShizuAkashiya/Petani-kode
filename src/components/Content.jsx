import React, { useEffect, useState } from 'react';

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data.slice(3, 9));
        setCategories(data.slice(0, 3));
      });
  }, []);

  return (
    <div className="container mx-auto px-4 lg:max-w-7xl mt-16 mb-16">

      <div className="mb-16">
        <div className="font-bold uppercase text-teal-600 dark:text-teal-400 text-sm mb-2">Kategori</div>
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">Mau belajar apa hari ini?</h2>
        <p className="text-lg mb-8 text-slate-500 dark:text-slate-300">Temukan tutorial berdasarkan minatmu.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((cat, index) => (
            <a key={cat.id} className="block dark:bg-slate-800 rounded-2xl px-6 py-8 bg-white shadow-md hover:shadow-lg active:scale-95 transition-all active:shadow-sm">

              <h3 className="text-slate-900 dark:text-white mt-5 text-base font-bold tracking-tight">
                {cat.title.split(' ').slice(0, 3).join(' ')}
              </h3>
              <div className="flex items-center">
                <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">{cat.body.split(' ').slice(0, 20).join(' ')}...</p>
                <span>
                  <svg className="h-6 w-6 ml-4" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="font-bold uppercase text-teal-600 dark:text-teal-400 text-sm mb-2">Update</div>
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">Apa yang baru di Petani Kode? 🔥</h2>
        <p className="text-lg mb-8 text-slate-500 dark:text-slate-300">Baca artikel terbaru yang masih fresh dan hangat.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {posts.map(post => (
            <div key={post.id} className="shadow-md p-6 rounded-2xl bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:outline dark:hover:outline-slate-600">
              <h3 className="text-lg font-bold mb-2 tracking-tight line-clamp-2">{post.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-300 line-clamp-3">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;

import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getPosts');
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {/* Intro Section */}
      <div className='flex flex-col gap-6 px-3 py-16 sm:py-20 lg:py-28 max-w-6xl mx-auto'>
        <h1 className='text-3xl font-bold lg:text-6xl'>
          Welcome to my Blog
        </h1>

        <div className='text-gray-500 text-xs sm:text-sm leading-relaxed space-y-3'>
          <p>
            This is my little corner of the internet — a place where I share thoughts, 
            experiences, and knowledge on topics I’m passionate about: 
            <span className='font-medium text-gray-700'> Travel, Education, Technology, and Finance</span>.
          </p>
          <p>
            From exploring breathtaking destinations to diving into tech trends and 
            practical money tips, my goal is to create content that’s both useful 
            and inspiring.
          </p>
          <p>
            Grab a coffee, take a look around, and enjoy the journey!
          </p>
        </div>

        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>

      {/* Call To Action Section */}
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      {/* Recent Posts Section */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
        <p className='text-gray-400 text-center text-sm'>
          Fresh ideas, guides, and stories — straight from the blog.
        </p>

        {posts && posts.length > 0 ? (
          <div className='flex flex-wrap gap-4 justify-center'>
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className='text-center text-gray-500'>
            No posts yet. Stay tuned for upcoming content!
          </p>
        )}

        {posts && posts.length > 0 && (
          <Link
            to={'/search'}
            className='text-lg text-teal-500 hover:underline text-center'
          >
            View all posts
          </Link>
        )}
      </div>
    </div>
  );
}

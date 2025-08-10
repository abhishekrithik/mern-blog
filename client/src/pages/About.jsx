import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          About Abhishek&apos;s Blog
        </h1>

        <div className="text-lg text-gray-600 leading-relaxed space-y-6">
          <p>
            Welcome to <span className="font-semibold">Abhishek’s Blog</span> – a space
            where passion meets purpose. I’m Abhishek, a MERN Stack Developer and
            tech enthusiast with a love for sharing ideas, knowledge, and experiences
            with the world. This blog is my personal corner of the internet, where I
            write about technology, web development, and the little things that inspire
            me in life.
          </p>

          <p>
            I graduated with a <span className="font-semibold">B.Tech in Information Technology </span> 
            from Sri Krishna College of Technology, Coimbatore (2019–2023) with a CGPA of 7.6.
            Over the years, I’ve built a strong foundation in programming and problem-solving,
            mastering languages like <span className="italic">JavaScript</span> and <span className="italic">Python</span>, 
            along with frameworks and tools such as <span className="italic">React.js, Node.js, Express, MongoDB, Redux, HTML, CSS,</span> 
            and <span className="italic">Bootstrap</span>.
          </p>

          <p>
            While coding is my profession, creativity and curiosity are my true superpowers.
            Whether it’s exploring new technologies, traveling to new places, hitting the gym,
            or creating content, I’m always chasing growth — both personally and professionally.
          </p>

          <p>
            When I’m not in front of my laptop, you might find me riding my bike through scenic
            routes, exploring hidden travel gems, or training at the gym to push my limits.
            Fitness, travel, and tech are the three things that keep me inspired every single day.
          </p>

          <p>
            This blog is more than just articles — it’s a place to connect, learn, and grow together.
            I encourage you to leave comments, share your thoughts, and be part of this journey.
            After all, knowledge becomes more powerful when shared.
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col md:flex-row bg-cover bg-center" 
      style={{ backgroundImage: "url('/h.jpg')" }}
    >
      {/* Left side for the image */}
      <div className="relative w-full md:w-1/2 h-auto flex items-center justify-center p-4 md:p-0">
        <div className="relative w-full md:w-4/5 h-[200px] md:h-full"> {/* Mobile height adjustment */}
          <Image 
            src="/Untitled2.png" 
            alt="Abdul Rehman"
            fill // This makes the image fill the container
            className="object-contain" // Ensures the image maintains aspect ratio
            sizes="(max-width: 768px) 80vw, (min-width: 769px) 33vw" // Adjusts based on screen size
          />
        </div>
      </div>

      {/* Right side for text */}
      <div className="text-center text-white flex flex-col items-center justify-center w-full md:w-1/2 p-4">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-2 text-white-800">I&apos;m</h1>
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 text-white-900 glow">Abdul Rehman</h1>
        <p className="text-lg md:text-xl mb-8 bg-purple-600 p-4 rounded opacity-80">Web Development | Digital Marketing | SEO Optimization</p>
        <a href="#contact" className="px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-blue-600 text-white rounded">Get Started</a>
      </div>
    </section>
  );
}

export default Hero;

export default function HeroSection() {
  return (
    <div
      className="w-full h-[663px] bg-[#F2F0F1] bg-cover bg-center flex items-left justify-center"
      style={{
        backgroundImage: "url('/Rectangle 2.png')", // Replace with your image path
      }}
    >
      <div className="max-w-[577px] mx-auto py-8 items-left ">
        {/* Text Content */}
        <div
          style={{ fontFamily: "Integral CF, sans-serif" }}
        >
          <p className="w-auto h-[64px] text-left font-black text-black leading-[64px] pl-[50px]">FIND CLOTHES THAT MATCHES YOUR STYLE</p>
          <p className="w-auto h-[16px] text-left font-black text-black leading-[16px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="mt-1 px-6 py-0 bg-black text-white rounded-full hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full h-[663px] bg-[#000000] bg-cover bg-center flex items-left justify-center">

      </div>
    </div>
  );
}

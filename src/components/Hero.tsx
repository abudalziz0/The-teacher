import heroImage from "/public/HD-wallpaper-anonymous-dark-hat-male-man-mask-suit.jpg";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      <img src={heroImage} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-80" />
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold">مرحبًا بك في موقعنا</h1>
        <p className="text-lg">نحن نقدم أفضل الحلول التقنية</p>
      </div>
    </section>
  );
}

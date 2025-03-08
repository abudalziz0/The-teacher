import aboutImage from "/public/HD-wallpaper-anonymous-hacker-matrix-green.jpg";

export default function About() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={aboutImage} alt="About Us" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">من نحن</h2>
            <p className="text-muted-foreground">
              نحن شركة تقنية مبتكرة توفر حلولًا رقمية متقدمة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

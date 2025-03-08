import contactImage from "/public/HD-wallpaper-anonymous-mask-roses-flowers-dark.jpg";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h1 className="text-3xl font-bold mb-4">اتصل بنا</h1>
        <img src={contactImage} alt="Contact Us" className="rounded-lg shadow-lg mx-auto mb-6 w-full md:w-3/4" />
        <p className="text-muted-foreground">نحن هنا لمساعدتك! يرجى ملء النموذج أدناه.</p>
      </div>
    </section>
  );
}

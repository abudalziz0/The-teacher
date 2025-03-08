import featuresImage from "/public/HD-wallpaper-anonymous-hackers-hacking.jpg";

export default function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">المميزات</h2>
        <img src={featuresImage} alt="Features" className="rounded-lg shadow-lg mx-auto mb-6 w-full md:w-3/4" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          نقدم مجموعة من الميزات المتقدمة لتحسين تجربة المستخدم.
        </p>
      </div>
    </section>
  );
}

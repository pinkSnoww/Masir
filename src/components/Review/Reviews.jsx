const testimonials = [
  { name: "سارا محمدی", role: "طراحی محصول برای استارتاپ‌ها", review: "با دوره‌های طراحی محصول توانستم محصول استارتاپ خود را به بازار عرضه کنم و نتایج فوق‌العاده‌ای بگیرم." },
  { name: "نرگس افضلی", role: "طراحی محصول برای استارتاپ‌ها", review: "دوره طراحی محصول برای استارتاپ‌ها بسیار کاربردی بود. بعد از این دوره توانستم محصول خود را به شکل بهتری مدیریت و به بازار عرضه کنم." },
  { name: "محمد طاهری", role: "برنامه‌نویس از مشرق‌الاذکار", review: "مدرسه مسیر واقعاً بهترین جایی است که تا به حال برای یادگیری برنامه‌نویسی پیدا کرده‌ام. مطالب به‌روز و مربی‌ها همیشه حاضر به کمک هستند." },
  { name: "حمید فرزانه", role: "برنامه‌نویس از مشرق‌الاذکار", review: "از پشتیبانی خوب مدرسه مسیر بسیار راضی‌ام. سوالاتم سریع و دقیق پاسخ داده می‌شوند و به من کمک کردن مشکلاتم را در یادگیری حل کنم." }
];

const Reviews = () => (
  <div className="py-8 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-center mb-8 text-3xl font-bold">نظرات هنرجویان ما!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <div>
              <h5 className="text-xl font-semibold">{testimonial.name}</h5>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
            <div className="mt-4">
              <p className="text-base">{testimonial.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Reviews;

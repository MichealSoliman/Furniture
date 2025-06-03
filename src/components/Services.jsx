import React from "react";
import { FaTools, FaCouch, FaTruck, FaBoxes, FaWarehouse } from "react-icons/fa";
import { motion } from "framer-motion";

const smallCards = [
  { icon: <FaTools />, text: "خدمة تركيب الأثاث بجدة" },
  { icon: <FaCouch />, text: "أثاث عالي الجودة مع تغليف آمن" },
  { icon: <FaTruck />, text: "نقل سريع وآمن داخل وخارج جدة" },
];

const bigCards = [
  {
    title: "نقل الأثاث بكل أمان",
    text: "نقدم خدمات نقل أثاث متكاملة داخل مدينة جدة مع تغليف كامل وضمان على سلامة الأثاث. يتم النقل باستخدام سيارات مجهزة وعمالة مدربة لضمان الجودة العالية.",
    icon: <FaTruck />,
  },
  {
    title: "خدمة الفك والتركيب",
    text: "فريقنا الفني يعتني بفك جميع أنواع الأثاث بدقة واحترافية، مع إعادة تركيبه في الموقع الجديد بأعلى كفاءة ممكنة دون أي تلف أو خسائر.",
    icon: <FaTools />,
  },
  {
    title: "تخزين الأثاث لفترات طويلة",
    text: "نوفر مستودعات مؤمنة بالكامل لتخزين الأثاث سواء لفترات قصيرة أو طويلة، مع نظام مراقبة حديث وبيئة مناسبة للحفاظ على الأثاث.",
    icon: <FaWarehouse />,
  },
  {
    title: "تغليف مخصص لكافة أنواع العفش",
    text: "نستخدم أفضل مواد التغليف المصممة لحماية الأثاث، سواء الزجاج أو الأجهزة أو الأخشاب، مع خيارات تغليف خاصة للقطع القيمة.",
    icon: <FaBoxes />,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-10 container mx-auto  text-right" dir="rtl">
<div className="text-center mb-10 max-w-[600px] mx-auto">
  <p data-aos="fade-up" className="text-sm text-primary">
    خدمات احترافية لنقل وتركيب الأثاث في جدة
  </p>
  <h1 data-aos="fade-up" className="text-3xl font-bold">
    خدماتنا
  </h1>
  <p data-aos="fade-up" className="text-xs text-gray-400 leading-6">
    نقدم مجموعة متنوعة من الخدمات التي تشمل نقل الأثاث، الفك والتركيب، التخزين الآمن، والتغليف الاحترافي،
  </p>
</div>
      {/* الكروت الصغيرة */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
        {smallCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="text-3xl text-primary">{card.icon}</div>
            <p className="font-medium text-gray-600 text-sm">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* الكروت الكبيرة */}
      <div className="grid md:grid-cols-2 gap-10 mb-5">
        {bigCards.map((card, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-4"
          >
            <div className="text-4xl text-primary ">{card.icon}</div>
            <h3 className="text-xl font-bold">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-7">{card.text}</p>
          </motion.div>
        ))}
      </div>

      {/* زر المزيد من الخدمات */}
      <div className="text-center mt-10">
        <a
          href="https://wa.me/966566666666"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition"
        >
          المزيد من الخدمات
        </a>
      </div>
    </section>
  );
};

export default Services;

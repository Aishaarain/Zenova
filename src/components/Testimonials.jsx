import React from "react";
import { Sparkles, Star, Quote, ArrowRight, User, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { scrollToId } from "../utils/scrollTo";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Testimonial Data - New Names & Companies
const testimonials = [
  {
    id: 1,
    name: "Fatima Noor",
    position: "Founder",
    company: "Apex Digital",
    content: "ZenovaLab took our idea and turned it into a working product in just 4 weeks. The team understood our market needs and delivered beyond expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Bilal Ahmed",
    position: "CEO",
    company: "Nexus Solutions",
    content: "Working with ZenovaLab was a game-changer for our business. Their AI integration helped us automate processes we never thought possible. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "David Kim",
    position: "CTO",
    company: "Sigma Cloud",
    content: "The team at ZenovaLab delivered a world-class product. Their attention to detail and commitment to quality is impressive. Would definitely work with them again.",
    rating: 5,
  },
  {
    id: 4,
    name: "Rania Hassan",
    position: "Product Lead",
    company: "Vortex Data",
    content: "ZenovaLab's AI solutions transformed our data processing. They built exactly what we needed and delivered on time. A truly professional team.",
    rating: 5,
  },
  {
    id: 5,
    name: "Tom Harris",
    position: "Marketing Director",
    company: "Pulse Brands",
    content: "The SaaS platform ZenovaLab built for us helped us scale our operations. Their expertise in both development and AI is remarkable.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sana Mir",
    position: "Founder",
    company: "Oakleaf Analytics",
    content: "Working with ZenovaLab was a seamless experience. They understood our requirements and built a product that exceeded our expectations.",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionContent = {
    eyebrow: "Client Stories",
    heading: "What Our Clients Say",
    subheading: "Real feedback from businesses around the world who trusted us to build their digital products.",
    cta: "Start Your Project",
  };

  return (
    <section 
      id="testimonials" 
      aria-label="Client testimonials from global businesses"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
      style={{ 
        background: "linear-gradient(180deg, #0a0a1a 0%, #0d0d2b 40%, #0a0a1a 100%)" 
      }}
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(250,204,21,0.04), transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(250,204,21,0.03), transparent 50%)
          `,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[400px] h-[300px] rounded-full opacity-15"
        style={{
          background: `radial-gradient(circle, rgba(250,204,21,0.06), transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase mb-2 sm:mb-3"
            style={{
              background: "rgba(250,204,21,0.10)",
              border: "1px solid rgba(250,204,21,0.20)",
              color: "#FACC15",
            }}
          >
          
            {sectionContent.eyebrow}
          </div>

          <h2
            className="text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.08] tracking-[-0.03em]"
            style={{ color: "#fff" }}
          >
            {sectionContent.heading}
          </h2>

          <p
            className="mt-3 text-[14px] sm:text-[15px] leading-[1.6] max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {sectionContent.subheading}
          </p>
        </div>

        {/* Testimonial Slider - Swiper */}
        <div className="testimonials-slider-wrapper">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            autoplay={{ 
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            breakpoints={{
              640: { 
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: { 
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                {({ isActive }) => (
                  <div 
                    className={`rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-500 ${
                      isActive ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-70'
                    }`}
                    style={{
                      background: isActive 
                        ? "rgba(20,20,40,0.8)" 
                        : "rgba(20,20,40,0.4)",
                      border: isActive 
                        ? "1px solid rgba(250,204,21,0.20)" 
                        : "1px solid rgba(255,255,255,0.06)",
                      minHeight: "280px",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(250,204,21,0.30)";
                      e.currentTarget.style.background = "rgba(20,20,40,0.9)";
                      e.currentTarget.style.transform = "translateY(-4px) scale(1.01)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = isActive 
                        ? "rgba(250,204,21,0.20)" 
                        : "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background = isActive 
                        ? "rgba(20,20,40,0.8)" 
                        : "rgba(20,20,40,0.4)";
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                    }}
                  >
                    {/* Quote Icon & Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <Quote size={24} style={{ color: "rgba(250,204,21,0.3)" }} />
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="#FACC15"
                            style={{ color: "#FACC15" }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content with animation */}
                    <p
                      className={`text-[14px] sm:text-[15px] leading-relaxed mb-4 italic transition-all duration-500 ${
                        isActive ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-2'
                      }`}
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      "{t.content}"
                    </p>

                    {/* Client Info */}
                    <div className="border-t border-white/5 pt-4">
                      <div className="flex items-center gap-2">
                        <User size={14} style={{ color: "rgba(250,204,21,0.5)" }} />
                        <span className="font-bold" style={{ color: "#fff" }}>{t.name}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} style={{ color: "rgba(250,204,21,0.4)" }} />
                        <span className="text-[11px] sm:text-[12px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {t.position} at {t.company}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrow Buttons */}
          <button className="custom-prev" aria-label="Previous testimonial">
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <button className="custom-next" aria-label="Next testimonial">
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Custom CSS for Swiper styling */}
        <style>{`
          .testimonials-slider-wrapper {
            position: relative;
            padding-bottom: 30px;
          }

          .testimonial-swiper {
            padding: 8px 0;
          }

          /* Custom Pagination Styling */
          .testimonials-slider-wrapper .swiper-pagination {
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            gap: 8px;
          }

          .testimonials-slider-wrapper .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .testimonials-slider-wrapper .swiper-pagination-bullet-active {
            background: #FACC15;
            width: 28px;
            border-radius: 5px;
            box-shadow: 0 0 20px rgba(250, 204, 21, 0.3);
          }

          /* Custom Navigation Arrows */
          .custom-prev,
          .custom-next {
            position: absolute;
            top: 45%;
            transform: translateY(-50%);
            z-index: 10;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(20, 20, 40, 0.7);
            border: 1.5px solid rgba(250, 204, 21, 0.2);
            color: #FACC15;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            backdrop-filter: blur(12px);
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
          }

          .custom-prev {
            left: -10px;
          }

          .custom-next {
            right: -10px;
          }

          .custom-prev:hover,
          .custom-next:hover {
            background: rgba(250, 204, 21, 0.15);
            border-color: rgba(250, 204, 21, 0.5);
            transform: translateY(-50%) scale(1.1);
            box-shadow: 0 0 40px rgba(250, 204, 21, 0.15);
          }

          .custom-prev:active,
          .custom-next:active {
            transform: translateY(-50%) scale(0.95);
          }

          .custom-prev.swiper-button-disabled,
          .custom-next.swiper-button-disabled {
            opacity: 0.3;
            cursor: not-allowed;
            transform: translateY(-50%) scale(0.9) !important;
          }

          /* Hide default Swiper arrows */
          .testimonials-slider-wrapper .swiper-button-next,
          .testimonials-slider-wrapper .swiper-button-prev {
            display: none !important;
          }

          /* Responsive adjustments */
          @media (max-width: 640px) {
            .custom-prev,
            .custom-next {
              display: none;
            }
          }

          @media (min-width: 641px) and (max-width: 1023px) {
            .custom-prev {
              left: -5px;
            }
            .custom-next {
              right: -5px;
            }
            .custom-prev,
            .custom-next {
              width: 40px;
              height: 40px;
              top: 45%;
            }
          }

          @media (min-width: 1024px) {
            .custom-prev {
              left: -15px;
            }
            .custom-next {
              right: -15px;
            }
          }

          /* Slide animation */
          .testimonials-slider-wrapper .swiper-slide {
            transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}</style>

        {/* CTA - Reduced gap between cards and button */}
        <div className="text-center mt-6 sm:mt-8 md:mt-8">
          <button
            onClick={() => scrollToId("start")}
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[13px] sm:text-[14px] font-black transition-all duration-300 hover:scale-105"
            style={{
              background: `linear-gradient(135deg, #FACC15, #EAB308)`,
              color: "#0a0a0f",
              boxShadow: `0 4px 20px rgba(250,204,21,0.20)`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 30px rgba(250,204,21,0.35)`;
              e.currentTarget.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 4px 20px rgba(250,204,21,0.20)`;
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {sectionContent.cta}
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

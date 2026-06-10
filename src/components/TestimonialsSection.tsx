import TestimonialsCarousel from "./TestimonialsCarousel";
import {
  getHomepage,
  getTestimonials,
  type StrapiTestimonial,
} from "@/lib/strapi";

const FALLBACK_HEADER = {
  testimonialsBadge: "Testimonials",
  testimonialsTitle: "What Our Traders Say",
};

const FALLBACK_TESTIMONIALS: StrapiTestimonial[] = [
  {
    id: 1,
    documentId: "fb-1",
    name: "David k",
    role: "Client",
    initials: "DK",
    quote:
      "Customer support actually listens and resolves issues quickly. It feels like a platform that really cares about its traders.",
    order: 1,
  },
  {
    id: 2,
    documentId: "fb-2",
    name: "Rohan M",
    role: "Client",
    initials: "RM",
    quote:
      "I’ve tried multiple trading platforms, but Finsai Trade feels different. The interface is clean and intuitive, making it so easy to track trades.",
    order: 2,
  },
  {
    id: 3,
    documentId: "fb-3",
    name: "Sarah L",
    role: "Client",
    initials: "SL",
    quote:
      "The webinars are incredibly valuable. I learned strategies in one session that I applied the very next day with great results.",
    order: 3,
  },
];

export default async function TestimonialsSection() {
  const [home, fetched] = await Promise.all([
    getHomepage(),
    getTestimonials(),
  ]);
  const header = home ?? FALLBACK_HEADER;
  const testimonials =
    fetched && fetched.length > 0 ? fetched : FALLBACK_TESTIMONIALS;

  return (
    <section
      className="page-section"
      style={{ background: "#050208", paddingBottom: "96px" }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 22px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "60px",
            }}
          >
            <span className="badge-text">{header.testimonialsBadge}</span>
          </span>
        </div>

        <h2
          className="section-title"
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          {header.testimonialsTitle}
        </h2>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}

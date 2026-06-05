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
    name: "Jamson Holo",
    role: "Client",
    initials: "JH",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta, ex at luctus commodo, metus erat dictum sapien, eget dictum turpis felis vitae ligula. Sed porta, ex at luctus commodo,",
    order: 1,
  },
  {
    id: 2,
    documentId: "fb-2",
    name: "Deepak Rana",
    role: "Client",
    initials: "DR",
    quote:
      "Good customer care. I got rapidly answered and have my problems solved. I am very thankful to finsai trading support team.",
    order: 2,
  },
  {
    id: 3,
    documentId: "fb-3",
    name: "Satish Kumar",
    role: "Client",
    initials: "SK",
    quote:
      "The withdrawal and trading experience was very good. The support was available all the time. I was fearing at first to use the platform as they are new, but their withdrawal process was very easy, hence I am giving 4 stars.",
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
    <section style={{ background: "#050208", padding: "100px 0" }}>
      <div style={{ maxWidth: "1440px", maxHeight: "397px",margin: "0 auto", padding: "0 80px" }}>
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

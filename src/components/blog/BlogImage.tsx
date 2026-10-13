import Image from "next/image";
import s from "./blog.module.css";

/**
 * Fixed 16:9 frame for every blog image (hero, listing cards, related cards).
 *
 * The image is shown whole with `object-fit: contain`, over a blurred copy of
 * itself filling the frame. A 16:9 image fills the frame exactly; anything
 * else keeps all of its content (logos, headline text) instead of being
 * cropped differently from card to card. Both layers request the same URL at
 * the same `sizes`, so the browser downloads it once.
 */
export default function BlogImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={className ? `${s.media} ${className}` : s.media}>
      <Image src={src} alt="" aria-hidden fill sizes={sizes} priority={priority} className={s.mediaBackdrop} />
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={s.mediaImg} />
    </div>
  );
}

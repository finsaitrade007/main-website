import { getNavItems } from "@/lib/strapi";
import Navbar from "./Navbar";

const DEFAULT_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Accounts", href: "/accounts" },
  { label: "Webinar", href: "/webinar" },
  { label: "Blogs", href: "/blogs" },
];

export default async function NavbarWrapper() {
  const strapiItems = await getNavItems();
  const navLinks = strapiItems?.length
    ? strapiItems.map((i) => ({ label: i.label, href: i.href }))
    : DEFAULT_NAV_LINKS;
  return <Navbar navLinks={navLinks} />;
}

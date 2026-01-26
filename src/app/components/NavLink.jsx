import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="group relative block py-2 text-stone-700 hover:text-amber-800 transition-colors duration-300"
    >
      <span className="text-sm font-light tracking-wide uppercase">
        {title}
      </span>
      {/* Animated Underline */}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-800 group-hover:w-full transition-all duration-300 ease-out"></span>
    </Link>
  );
};

export default NavLink;
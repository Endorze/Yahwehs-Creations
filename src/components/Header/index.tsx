import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const navItems = [
    {
      label: "Home",
      href: "/"
    },
    {
      label: "About Us",
      href: "/about-us"
    },
    {
      label: "Blog",
      href: "/blog"
    }
  ];

  return (
    <div className="flex justify-between items-center bg-black text-white py-4 px-40">
      <div>
        <Image
          src="/images/matrix-removebg-preview.png"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <nav className="flex gap-8 border-l-2 border-white pl-8">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="py-1">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;

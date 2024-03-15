import Link from "next/link";

export default function NavigationComponent() {
  const links = [
    { text: "Home", href: "/" },
    { text: "Exposições", href: "/exposicoes" },
    { text: "Pesquisa", href: "/pesquisa" },
    { text: "Acervo", href: "/acervo" },
    { text: "Vídeos", href: "/videos" },
    { text: "Fotos", href: "/fotos" },
    { text: "Contato", href: "/contato" }
  ];

  return (
    <div className="w-full h-full">
      <ul className="py-4 m-4 float-right text-[#af670a]">
        {links.map((link, index) => (
          <li
            key={index}
            className="float-left hover:text-[#227115] block mr-7 pb-1 uppercase"
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

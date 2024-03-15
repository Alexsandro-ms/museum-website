import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const imagesArray = [
    {
      id: 1,
      link: "/",
      alt: "Fotografia do interio do museu",
      path: "/assets/imagem1.jpg"
    },
    {
      id: 2,
      link: "/",
      alt: "Fotografia do interio do museu",
      path: "/assets/imagem2.jpg"
    },
    {
      id: 3,
      link: "/",
      alt: "Fotografia do interio do museu",
      path: "/assets/imagem3.jpg"
    },
    {
      id: 4,
      link: "/",
      alt: "Fotografia do interio do museu",
      path: "/assets/imagem4.jpg"
    }
  ];
  return (
    <div className="">
      <main>
        <div className="w-[710px] float-left">
          <section>
            <Image
              src={"/assets/museu.png"}
              alt="Interior do museu"
              width={710}
              height={320}
              className="w-full h-full"
              style={{
                objectFit: "contain"
              }}
            />
            <article className="float-left mr-5 mt-5">
              <h3 className="text-[#227115] text-lg font-medium">
                Conheça o museu
              </h3>
              <iframe
                width="310"
                height="170"
                src="https://www.youtube.com/embed/RGUYb-hivrc?si=slkgkjo5o5zed6_S"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </article>
            <article className="float-left mr-5 mt-5">
              <h3 className="text-[#227115] text-lg font-medium">
                Encontre o museu
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2064457500933!2d-43.22910382565177!3d-22.905755037832332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e58a085b7af%3A0x4d11e9a933d38ce3!2sMuseu%20Nacional%20-%20UFRJ!5e0!3m2!1spt-BR!2sbr!4v1710517723422!5m2!1spt-BR!2sbr"
                width="310"
                height="170"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </article>
            <article className="float-left mr-5 max-w-[310px] mt-5">
              <h3 className="text-[#227115] text-lg font-medium">Exposições</h3>
              <ul>
                <li>
                  <Link href="#">Os assustadores insetos</Link>
                </li>
                <li>
                  <Link href="#">
                    O crânio de Luzia, a mulher mais antiga do Brasil
                  </Link>
                </li>
                <li>
                  <Link href="#">Preguiça gigante e tigre-dentes-de-sabre</Link>
                </li>
                <li>
                  <Link href="#">Plantas do Brasil</Link>
                </li>
                <li>
                  <Link href="#">Teresa Cristina: A Imperatriz Arqueólaga</Link>
                </li>
                <li>
                  <Link href="#">Arte Com Dinossauro</Link>
                </li>
                <li>
                  <Link href="#">
                    <strong>Veja todos (65)</strong>
                  </Link>
                </li>
              </ul>
            </article>
            <article className="float-left mr-5 max-w-[310px] mt-5">
              <h3 className="text-[#227115] text-lg font-medium">
                200 anos de história
              </h3>
              <p>
                Numa ponta que avançava sobre o mar, posteriormente conhecida
                como Ponta do Calabouço, entre as praias de Piaçaba e Santa
                Luzia, no centro histórico do Rio de Janeiro, os portugueses
                construíram em 1603 a Frotaleza de Santiago, origem do conjunto
                arquitetônico que hoje abriga o Museu Histórico Nacional.
              </p>
              <Link href="#">
                <strong>Leia mais</strong>
              </Link>
            </article>
          </section>
        </div>
        <aside className="w-[350px] float-right bg-[#ebe7dd] pb-5">
          <section>
            <Image
              src={"/assets/depoimento.png"}
              alt="Depoimento de visitante"
              width={350}
              height={320}
              className="w-full h-full"
              style={{
                objectFit: "cover"
              }}
            />
          </section>
          <section className="bg-[#cdc8b1] pt-[10px] pr-[27px] pb-[27px] pl-[27px] mt-[10px]">
            <h4 className="text-[#86521a] uppercase pb-[3px] mb-0 font-medium">
              Agende uma visita
            </h4>
            <form>
              <fieldset className="flex gap-2 items-center">
                <legend className="hidden">Selecionar data</legend>
                <label>Data</label>
                <input
                  type="text"
                  value={"dd/mm/aaaa"}
                  className="h-[20px] my-2 bg-white outline-none text-base w-[80px] border-2 border-[#ada484]"
                />

                <label>Qtd pessoas</label>
                <input
                  type="text"
                  value={"01"}
                  className="h-[20px]  bg-white outline-none text-base w-[30px] border-2 border-[#ada484]"
                />
              </fieldset>
              <input
                type="submit"
                value={"Verificar disponibilidade"}
                className="bg-[#9b9271] text-white w-full h-[40px] text-[1.em] hover:cursor-pointer"
              />
            </form>
          </section>
          <section>
            <h4 className="ml-5 mt-4 text-[#86521a] uppercase pb-[3px] mb-0 font-medium">
              Galeria de Fotos
            </h4>
            {imagesArray.map((image) => (
              <Link
                href={image.link}
                key={image.id}
                className="block float-left mt-2 ml-5 p-4 pt-5 bg-[url('/assets/fundo-foto.png')] bg-no-repeat"
              >
                <Image
                  alt={image.alt}
                  width={93}
                  height={93}
                  src={image.path}
                />
              </Link>
            ))}
          </section>
        </aside>
      </main>
    </div>
  );
}

// AOS
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Navmenu from "../components/NavMenu/Navmenu";
import bannerNoticias from "../assets/portada3.jpg";
import CardAnuncios from "../components/CardAnuncios/CardAnuncios";

const Noticias = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const bgNoticiasGcch = {
    backgroundImage: `url(${bannerNoticias})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className="d-flex flex-column min-vh-100" // Asegura diseño flexible
      style={bgNoticiasGcch}
    >
      <header>
        <Navmenu />
      </header>

      <main className="flex-grow-1">
        <div className="container py-4">
          <div className="row g-0 mt-5">
            <div className="col-12 my-5">
              <h2 className="fst-italic text-white text-center">
                Anuncios Relevantes para ti
              </h2>
            </div>
          </div>

          <div className="row g-0">
            <div className="container">
              <div className="row g-0">
                <div className="col-12" data-aos="fade-left">
                  <CardAnuncios />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Noticias;

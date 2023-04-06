import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import  NoticiasModal  from "./NoticiasModal";
import ModalPremium from "./ModalPremium";
import {
  ContenedorNoticias,
  TituloNoticias,
  ListaNoticias,
  TarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  BotonLectura,
} from "./styled";

//OCP: la interfaz INoticiasNormalizadas se puede extender sin modificar el código de Noticias.tsx

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);
  const [modalPremium, setModalPremium] = useState(false);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((n) => {
        const titulo = n.titulo
          .split(" ")
          .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
          })
          .join(" ");

        const ahora = new Date();
        const minutosTranscurridos = Math.floor(
          (ahora.getTime() - n.fecha.getTime()) / 60000
        );

        return {
          id: n.id,
          titulo,
          descripcion: n.descripcion,
          fecha: `Hace ${minutosTranscurridos} minutos`,
          esPremium: n.esPremium,
          imagen: n.imagen,
          descripcionCorta: n.descripcion.substring(0, 100),
        };
      });

      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

  const handleOpenModal = (noticia: INoticiasNormalizadas) => {
    if (noticia.esPremium) {
      setModalPremium(true)
      return;
    }
    setModal(noticia);
  };

  const handleCloseModal = () => {
    setModal(null);
    setModalPremium(false)
  };

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((n) => (
          <TarjetaNoticia key={n.id}>
            <ImagenTarjetaNoticia src={n.imagen} />
            <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {n.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => handleOpenModal(n)}>Ver más</BotonLectura>
          </TarjetaNoticia>
        ))}
      </ListaNoticias>
      {modal && (
        <NoticiasModal noticia={modal} onClose={handleCloseModal} />
      )}
      {modalPremium && (
        <ModalPremium onClose={handleCloseModal} />
      )

      }
    </ContenedorNoticias>
  );
};

export default Noticias;
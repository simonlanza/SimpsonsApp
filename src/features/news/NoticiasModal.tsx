import React from "react";
import { INoticiasNormalizadas } from "./Noticias";
import { CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal } from "./styled";
import {CloseButton as Close } from "../../assets";

// (SRP) : el componente NoticiasModal se ocupa del display de modal y deja a Noticias la responsabilidad de mostrar la lista de noticias y el modal

export interface NoticiaModalProps {
  noticia: INoticiasNormalizadas;
  onClose: () => void;
}

const NoticiasModal: React.FC<NoticiaModalProps> = ({ noticia, onClose }) => {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={onClose}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={noticia.imagen} alt="news-image" />
        <CotenedorTexto>
          <TituloModal>{noticia.titulo}</TituloModal>
          <DescripcionModal>{noticia.descripcion}</DescripcionModal>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default NoticiasModal;
import React from "react";
import { CloseButton, ContenedorModal, CotenedorTexto, DescripcionModal, ImagenModal, TarjetaModal, TituloModal } from "./styled";
import {CloseButton as Close } from "../../assets";
import { SuscribeImage } from "../../assets";

export interface ModalPremiumProps {
  onClose: () => void;
}

const ModalPremium: React.FC<ModalPremiumProps> = ({onClose}) => {
  return (
    <ContenedorModal>
    <TarjetaModal>
      <CloseButton onClick={onClose}>
        <img src={Close} alt="close-button" />
      </CloseButton>
      <ImagenModal src={SuscribeImage} alt="news-image" />
      <CotenedorTexto>
        <TituloModal>Lo siento, esta noticia es premium y no está disponible</TituloModal>
        <DescripcionModal>Para acceder a este contenido, debes tener una suscripción premium.</DescripcionModal>
        <DescripcionModal>Para la correcta creacion de un usuario premium, es necesario que nos envies un email con tu nombre completo, usuario, contrasenia, y motivo por el cual crees que deberiamos aceptarte como parte de nuestra familia premuium.
          email: simpsons@premium.com
        </DescripcionModal>
        <DescripcionModal>
          Gracias por su comprension.
        </DescripcionModal>
      </CotenedorTexto>
    </TarjetaModal>
  </ContenedorModal>
  );
};

export default ModalPremium;
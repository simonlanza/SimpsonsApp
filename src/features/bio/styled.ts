import styled from "styled-components";

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  border-radius: 5px;
`;

export const BioImagen = styled.img`
  width: 200px;
  height: 250px;
  max-height: 300px;
  margin-bottom: 20px;
`;

export const BioNombre = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const BioDescripcion = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

/* export const BotonBioActivo = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: green;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`; */

/* export const BotonBioInactivo = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: red;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`; */

export const ContenedorBotones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Boton = styled.button<{ activo: boolean }>`
  margin-right: 10px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background-color: ${({ activo }) => (activo ? "green" : "red")};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

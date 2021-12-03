import React from "react";
import { StyledErrorContainer, StyledErrorParagraph } from "./styledComponents";

const Errorfetch = () => {
    return (
        <StyledErrorContainer>
            <StyledErrorParagraph>
                Error - No se pudo cargar la información
            </StyledErrorParagraph>
        </StyledErrorContainer>
    );
};

export default Errorfetch;

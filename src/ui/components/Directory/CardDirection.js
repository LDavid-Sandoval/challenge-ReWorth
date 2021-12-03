import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import {
    StyledContainerCardDirection,
    StyledContainerCardDirectionParagraph,
} from "./styledComponents";

const CardDirection = ({ latlng, address }) => {
    return (
        <StyledContainerCardDirection>
            <HomeOutlined style={{ fontSize: "24px", color: "#a0aec0" }} />
            {address.length > 0 ? (
                <a
                    href={`https://maps.google.com/?q=${latlng[1]},${latlng[0]}`}>
                    <StyledContainerCardDirectionParagraph>
                        {address}
                    </StyledContainerCardDirectionParagraph>
                </a>
            ) : (
                <StyledContainerCardDirectionParagraph>
                    Sin dirección
                </StyledContainerCardDirectionParagraph>
            )}
        </StyledContainerCardDirection>
    );
};

export default CardDirection;

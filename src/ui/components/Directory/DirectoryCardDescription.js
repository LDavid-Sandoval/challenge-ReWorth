import React from "react";
import { Card, Rate } from "antd";
import {
    StyledItemDescription,
    StyledContainerItemDescription,
    StyledContainerCardDescriptionParagraph,
    StyledContainerCardDescriptioncontainer,
} from "./styledComponents";

import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
};

const { Meta } = Card;

const DirectoryCardDescription = ({
    rating,
    priceLevel,
    cashback,
    popularity,
}) => {
    console.log("popularity", popularity);
    return (
        <StyledContainerItemDescription>
            <StyledItemDescription>
                <Meta description="Calificación:" />
                {rating > 0 ? (
                    <Rate disabled defaultValue={rating} />
                ) : (
                    <StyledContainerCardDescriptionParagraph>
                        Sin calificación
                    </StyledContainerCardDescriptionParagraph>
                )}
            </StyledItemDescription>
            <StyledItemDescription>
                <Meta description="Costo:" />
                {priceLevel > 0 ? (
                    <Rate
                        character="$"
                        style={{ fontSize: 16 }}
                        defaultValue={priceLevel}
                        disabled
                    />
                ) : (
                    <StyledContainerCardDescriptionParagraph>
                        Costo desconocido
                    </StyledContainerCardDescriptionParagraph>
                )}
            </StyledItemDescription>
            <StyledItemDescription>
                <Meta description="Popularidad:" />
                <StyledContainerCardDescriptioncontainer>
                    <Rate
                        defaultValue={Math.floor(Math.random() * (5 - 1)) + 1}
                        character={({ index }) => customIcons[index + 1]}
                        disabled
                    />
                </StyledContainerCardDescriptioncontainer>
            </StyledItemDescription>
            <StyledItemDescription>
                <Meta description="Cashback:" />
                <StyledContainerCardDescriptioncontainer>
                    {cashback}
                </StyledContainerCardDescriptioncontainer>
            </StyledItemDescription>
        </StyledContainerItemDescription>
    );
};

export default DirectoryCardDescription;

import React from "react";
import { Card, Image } from "antd";
import DirectoryCardDescription from "./DirectoryCardDescription";
import CardDirection from "./CardDirection";
import {
    StyledCardContainer,
    StyledContainerCardtitleParagraph,
} from "./styledComponents";

const DirectoryCard = ({
    name,
    rating,
    media,
    cashback,
    popularity,
    priceLevel,
    latlng,
    address,
}) => {
    return (
        <StyledCardContainer>
            <Card
                hoverable
                style={{ width: 400, height: 750, cursor: "default" }}
                cover={<Image width={400} src={media} preview={false} />}
                title={
                    <StyledContainerCardtitleParagraph>
                        {name}
                    </StyledContainerCardtitleParagraph>
                }>
                <DirectoryCardDescription
                    rating={rating}
                    priceLevel={priceLevel}
                    cashback={cashback}
                    popularity={popularity}
                />
                <CardDirection latlng={latlng} address={address} />
            </Card>
        </StyledCardContainer>
    );
};

export default DirectoryCard;

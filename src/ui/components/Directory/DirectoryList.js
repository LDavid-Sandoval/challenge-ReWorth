import React from "react";
import DirectoryCard from "./DirectoryCard";
import { StyledListContainer } from "./styledComponents";

const DirectoryList = ({ offerList }) => {
    return (
        <StyledListContainer>
            {offerList?.data?.map((item, i) => {
                return (
                    <DirectoryCard
                        key={i}
                        name={item.name}
                        rating={item.rating}
                        media={item.media}
                        cashback={item.dv_cashback}
                        category={item.dv_category}
                        popularity={item.popularity}
                        priceLevel={item.price_level}
                        latlng={item.dv_latlng}
                        address={item.dv_address}
                    />
                );
            })}
        </StyledListContainer>
    );
};
export default DirectoryList;

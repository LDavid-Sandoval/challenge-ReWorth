import React, { useEffect, useState } from "react";
import { Spin, Space } from "antd";
import useFetch from "../../../hooks/useFetch";
import DirectoryList from "../../components/Directory/DirectoryList";
import env from "../../../settings/env/index";
import { StyledContainerLoading } from "./styledComponents";
import ErrorFetch from "../../components/error/ErrorFetch";

const DirectoryContainer = () => {
    const [data, setData] = useState(null);
    const [errorData, setErrorData] = useState(null);
    const [loadingData, setLoading] = useState(true);
    const { response, error, isLoading } = useFetch(
        `${env.root}/${env.businesses}`,
    );

    useEffect(() => {
        setData(response);
        setErrorData(error);
        setLoading(isLoading);
    }, [response, error, isLoading]);

    return (
        <>
            {loadingData && (
                <StyledContainerLoading>
                    <Space size="middle">
                        <Spin size="large" />
                    </Space>
                </StyledContainerLoading>
            )}
            {!loadingData && errorData === null && (
                <DirectoryList offerList={data} error={errorData} />
            )}
            {!loadingData && errorData !== null && <ErrorFetch />}
        </>
    );
};

export default DirectoryContainer;

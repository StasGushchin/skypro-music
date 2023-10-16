import React from "react";
import { useParams } from "react-router-dom";

const Collection = () => {
    const { id } = useParams();

    let pageContent;

    if (id === "1") {
        pageContent = <div style={{ color: "black" }}>Плейлист дня</div>;
    } else if (id === "2") {
        pageContent = (
            <div style={{ color: "black" }}>100 танцевальных хитов</div>
        );
    } else {
        pageContent = <div style={{ color: "black" }}>Инди-заряд</div>;
    }

    return <div>{pageContent}</div>;
};

export default Collection;
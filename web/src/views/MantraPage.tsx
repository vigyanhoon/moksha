import { useMemo } from "react";
import Wrapper from "./Wrapper";
import { MantraPageDetails } from "../types";


const MantraPage = ({ mp3, texts }: MantraPageDetails) => {
    const audio = useMemo(() => new Audio(mp3), [mp3]);

    return <Wrapper audio={audio} texts={texts} />;
};

export default MantraPage;
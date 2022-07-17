import { FC } from "react";
import { useSelector } from "react-redux";
import { CombinedStateI } from "../interface/Interfaces";

const Display: FC = () => {
    const value = useSelector((state: CombinedStateI): any => state.valueReducer.value);
    return (
        <div style={{ margin: '20px' }}>
            {value}
        </div>)
}

export default Display;
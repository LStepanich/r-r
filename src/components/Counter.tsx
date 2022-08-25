import { Dispatch, FC, useState } from "react";
import { useDispatch } from "react-redux";
import { ValueAction } from "../interface/Interfaces";
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'

export const Counter: FC = () => {

    const [inputValue, setInputValue] = useState(0);

    const add = () => { dispatch({ type: 'add', payload: inputValue }); setInputValue(0) };

    const substract = () => { dispatch({ type: 'substract', payload: inputValue }); setInputValue(0) };

    const dispatch: Dispatch<ValueAction> = useDispatch();

    return (
        <div>
            <Input placeholder="Placeholder" value={inputValue} onChange={(e) => { setInputValue(Number(e.target.value)) }} />
            <Button variant='contained' onClick={add}>ADD</Button>
            <Button variant='contained' onClick={substract}>SUBSTRACT</Button>
        </div>)
}
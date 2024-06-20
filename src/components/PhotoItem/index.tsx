import React from 'react';
import * as C from './styles';
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
    url: string;
    name: string;
    onDelete: (name: string) => void;
}

export const PhotoItem = ({ url, name, onDelete }: Props) => {
    const handleDeleteClick = () => {
        onDelete(name);
    };

    return (
        <C.Container>
            <img src={url} alt={name} />
            <div>{name}</div>
            <button onClick={handleDeleteClick} className='trash'><FaRegTrashAlt /></button>
        </C.Container>
    );
}

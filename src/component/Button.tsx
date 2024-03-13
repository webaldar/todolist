import React from 'react';

type buttonPropsType = {
    title: string
    onClick?: () => void
}
export const Button = ({title, onClick}: buttonPropsType) => {
    return (
        <button onClick={onClick}>{title}</button>
    );
};


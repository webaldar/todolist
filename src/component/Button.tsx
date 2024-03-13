import React from 'react';

type buttonPropsType = {
    title: string
}
export const Button = ({title}: buttonPropsType) => {
    return (
        <button>{title}</button>
    );
};


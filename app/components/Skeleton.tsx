import { Outlet } from '@remix-run/react';
import React from 'react';
import { Header } from './Header';

interface Props {};

export const Skeleton: React.FC<Props> = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
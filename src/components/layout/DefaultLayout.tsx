import React from 'react';
import Navigation from '../Navigation';

type DefaultLayout = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: DefaultLayout) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

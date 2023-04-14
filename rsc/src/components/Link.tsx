'use client';

import React from 'react';
import BaseLink from 'next/link'

export type LinkProps = {
  href: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({href, children}) => {
  return (
    <BaseLink href={href} className="text-blue-500">
      {children}
    </BaseLink>
  );
};

export default Link;
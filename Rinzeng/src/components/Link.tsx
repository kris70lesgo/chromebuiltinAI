import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Reset to home view by clearing any selected module
    window.location.href = href;
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
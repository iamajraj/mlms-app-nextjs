import React from 'react';

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <div className="w-full h-full flex items-center justify-center flex-1">
      {children}
    </div>
  );
}

export default AuthLayout;

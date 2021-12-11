import React from 'react';
import ContainerBlock from '../components/Container';
import Register from '../components/Register';

export default function register() {
  return (
    <ContainerBlock>
      <div className="flex h-screen">
        <div className="mx-auto my-20">
          <Register />
        </div>
      </div>
    </ContainerBlock>
  );
}

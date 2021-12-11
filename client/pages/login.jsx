import React from 'react';
import ContainerBlock from '../components/Container';
import Login from '../components/Login';

export default function login() {
  return (
    <ContainerBlock>
      <div className="flex h-screen">
        <div className="mx-auto my-20">
          <Login />
        </div>
      </div>
    </ContainerBlock>
  );
}

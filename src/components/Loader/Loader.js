import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { LoaderContainer } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderContainer>
      <MutatingDots color="#00BFFF" width={80} height={80} />
    </LoaderContainer>
  );
};

export default Loader;
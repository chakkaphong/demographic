import React from 'react';
import styled from 'styled-components'
import RegionList from './Components/Contents/RegionList'

const Contianer = styled.div `
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`

function App() {
  return (
    <Contianer>
      <RegionList />
    </Contianer>
  );
}

export default App;

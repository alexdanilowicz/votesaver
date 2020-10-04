import React from 'react';
import Box from '@material-ui/core/Box';
import CircleLogoSource from '../../../img/logos/Circle.svg';

const CircleLogo = (props) => {
  return (
    <Box width={props.width} height={props.height}>
      <CircleLogoSource width={props.width} height={props.height} />
    </Box>
  );
};

export default CircleLogo;

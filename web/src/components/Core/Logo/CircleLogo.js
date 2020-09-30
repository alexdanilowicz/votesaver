import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import CircleLogoSource from '../../../img/logos/Circle.svg';

const CircleLogo = (props) => {
  return (
    <Box width={props.width} height={props.height}>
      <NavLink to="/" exact>
        <CircleLogoSource width={props.width} height={props.height} />
      </NavLink>
    </Box>
  );
};

export default CircleLogo;

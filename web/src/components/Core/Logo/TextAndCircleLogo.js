import React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import TextAndCircleLogoSource from '../../../img/logos/CircleAndText.svg';

const TextAndCircleLogo = (props) => {
  return (
    <Box width={props.width} height={props.height}>
      <NavLink to="/" exact>
        <TextAndCircleLogoSource width={props.width} height={props.height} />
      </NavLink>
    </Box>
  );
};

export default TextAndCircleLogo;

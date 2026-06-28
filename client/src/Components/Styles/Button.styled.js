import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AddButton = styled(Button)`
  && {
    background-color: ${({ readings }) =>
    readings[readings.length - 1]?.chkMedsD ||
      readings[readings.length - 1]?.chkMedsBed ?
      "lightgreen" :
      "lightcoral"
  };
    padding: 5px 5px;
    margin-bottom: 10px;
    border: none;
    cursor:  ${({ readings }) =>
    readings[readings.length - 1]?.chkMedsD ||
      readings[readings.length - 1]?.chkMedsBed ?
      "pointer" :
      "not-allowed"
  };
    opacity:  ${({ readings }) =>
    readings[readings.length - 1]?.chkMedsD ||
      readings[readings.length - 1]?.chkMedsBed ?
      "1" :
      "0.5"
  };
  }
`;

export const StyledButton = styled(Link)`
  display: inline-block;
  color: #fff;
  background-color: rgba(133, 133, 245, 0.5);
  text-decoration: none;
  border: #fff 1px solid;
  border-radius: 50px;
  padding: 5px 5px;
  margin-bottom: 10px;

  transition-property: transform;
  transition-duration: 2s;
  &:hover {
    background-color: rgba(115, 236, 15, 0.5);
    /* transform: rotateY(360deg); */
  }
`;

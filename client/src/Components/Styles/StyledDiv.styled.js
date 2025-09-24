import styled from 'styled-components';

export const StyledDiv = styled.div`
  background-color: ${({ A1C }) =>
    A1C >= Number(1.0) && A1C <= Number(5.6)
      ? 'rgba(0,0,255,0.50)'
      : A1C >= Number(5.6) && A1C <= Number(6.5)
        ? 'rgba(255,255,0,0.50)'
        : A1C >= Number(6.5) && A1C <= Number(7.5)
          ? 'rgba(0,255,0,0.50)'
          : A1C >= Number(7.5) && A1C <= Number(8.5)
            ? 'rgba(255,165,0,0.50)'
            : A1C >= Number(8.5)
              ? 'rgba(255,0,0,0.50)'
              : 'rgba(0,0,0,0.25)'};
`;
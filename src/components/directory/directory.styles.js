import styled from "styled-components";

export const DirectoryMenuContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-right: 10rem;
  }

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

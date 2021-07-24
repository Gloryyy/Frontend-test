import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const HomePageText = styled.p`
  color: #7777;
  width: 32vw;

  @media screen and (max-width: 800px) {
    width: 70vw;
  }
`;

export const HomePageSubtitle = styled.h4`
  color: #7777;

  @media screen and (max-width: 800px) {
    width: 70vw;
  }
`;

export const HomePageSubtext = styled.h4`
  color: #777777;
`;

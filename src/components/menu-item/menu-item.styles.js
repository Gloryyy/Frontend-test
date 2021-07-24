import styled from "styled-components";

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "240px")};
  min-width: 35%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  &:hover {
    cursor: pointer;
    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    & .content {
      opacity: 0.9;
    }
  }
  &:first-child {
    flex: 1;
  }
  &:last-child {
    flex: 1;
  }
  @media screen and (max-width: 800px) {
    height: 200px;
    width: 200px;
  }
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
`;

export const ContentContainer = styled.div`
  height: 70px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  @media screen and (max-width: 800px) {
    height: 60px;
  }
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  &:hover {
    color: #e89b99;
  }

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1500px) {
    font-size: 16px;
  }
`;

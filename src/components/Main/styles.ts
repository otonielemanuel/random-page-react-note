import styled from "styled-components";

export const Container = styled.div`
  padding: 0px 10%;
`;

export const Hero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 55px;
  height: 100vh;

  @media (max-width: 970px) {
    height: 110vh;
  }
`;

export const DivTitle = styled.div`
  p {
    color: #97979e;
    font-size: 1.5rem;
    margin-bottom: 20px;

    @media (max-width: 612px) {
      margin-bottom: 15px;
      line-height: 45px;
    }

    @media (max-width: 375px) {
      line-height: 30px;
      font-size: 1.3rem;
  }
  }

  div {
    display: flex;
    column-gap: 15px;

    button {
      padding: 10px 30px;
      border-radius: 50px;
      border: 1px solid ${(p) => p.theme.colors.darkWhite};
      background-color: ${(p) => p.theme.colors.primary};
      font-size: 0.88rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.5s;

      a {
        color: ${(p) => p.theme.colors.black};
      }

      &.dark-btn {
        background-color: ${(p) => p.theme.colors.darkWhite};
        border: 1px solid ${(p) => p.theme.colors.darkWhite};

        &:hover {
          background-color: ${(p) => p.theme.colors.black};
        }

        a {
          color: ${(p) => p.theme.colors.white};
        }
      }
    }
  }
`;

export const Title = styled.h1`
  color: ${(p) => p.theme.colors.white};
  font-size: 3.125rem;
  font-weight: 600;
  width: 60%;

  @media (max-width: 970px) {
    width: 70%;
  }

  @media (max-width: 660px) {
    font-size: 3rem;
    width: 100%;
  }

  @media (max-width: 612px) {
    font-size: 3rem;
    width: 100%;
  }

  @media (max-width: 375px) {
    font-size: 2.5rem;
  }
`;

export const DivImg = styled.div`
  .blue-blur {
    display: flex;
    justify-content: center;
    background-color: ${(p) => p.theme.colors.secondary};
    filter: blur(80px);
    border-radius: 100%;
    transform: rotate(-20deg);
    position: absolute;
    width: 120px;
    height: 120px;
    left: -3%;
    top: 210%;
  }

  .blue-blur1 {
    display: flex;
    justify-content: center;
    background-color: ${(p) => p.theme.colors.secondary};
    filter: blur(90px);
    border-radius: 100%;
    transform: rotate(-20deg);
    position: absolute;
    width: 100px;
    height: 100px;
    left: 70%;
    top: 40%;

    @media (max-width: 375px) {
      width: 50px;
    height: 50px;
  }
  }

  .blue-blur2 {
    display: flex;
    justify-content: center;
    background-color: ${(p) => p.theme.colors.secondary};
    filter: blur(40px);
    border-radius: 100%;
    transform: rotate(-20deg);
    position: absolute;
    width: 80px;
    height: 80px;
    left: 80%;
    top: 520%;

    @media (max-width: 375px) {
      top: 599%;
    }
  }

  .green-blur {
    display: flex;
    justify-content: center;
    background-color: ${(p) => p.theme.colors.primary};
    filter: blur(70px);
    border-radius: 100%;
    transform: rotate(-20deg);
    position: absolute;
    width: 100px;
    height: 100px;
    left: 65%;
    top: 59%;

    @media (max-width: 375px) {
      width: 50px;
    height: 50px;
  }
  }

  .green-blur2 {
    display: flex;
    justify-content: center;
    background-color: ${(p) => p.theme.colors.primary};
    filter: blur(40px);
    border-radius: 100%;
    transform: rotate(-20deg);
    position: absolute;
    width: 60px;
    height: 60px;
    left: 75%;
    top: 535%;

    @media (max-width: 375px) {
    top: 300%;
  }
  }
`;

export const View = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 970px) {
    height: 100%;
    padding: 70px 0;
  }
`;

export const SubTitle = styled.h2`
  color: ${(p) => p.theme.colors.white};
  font-size: 2.3rem;
  margin: 40px 0;

  @media (max-width: 375px) {
    font-size: 2rem;
  }
`;

export const DoCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 2rem;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 25px;
  text-align: left;
  color: #97979e;
  margin-bottom: 30px;
  width: 75%;

  @media (max-width: 660px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

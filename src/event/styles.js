import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  height: 10vmin;
  font-size: 3.7vmin;
  font-family: Roboto-Black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CloseImage = styled.img`
  font-size: 1vmin;
  width: 40px;
  height: 40px;
  position: absolute;
  left: 20px;
`;

export const ProductBackground = styled.div`
  width: 50%;
  height: 30vmin;
  background-color: #ffa2ab;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const ProductContainer = styled.div`
  width: 85%;
  height: 20vmin;
  background-color: white;
  border: 1px solid #ff838f;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 9vmin;
  height: 9vmin;
  margin: 0 1vmin 0 5vmin;
`;

export const ProductDraw = styled.div`
  color: #ffa2ab;
  font-size: calc(6px + 1vmin);
  font-family: Roboto-Bold;
`;

export const ProductBrand = styled.div`
  color: #b2b2b2;
  font-size: calc(6px + 1vmin);
  font-family: Roboto-Bold;
`;

export const ProductName = styled.div`
  color: black;
  font-size: calc(8px + 1vmin);
  font-family: Roboto-Bold;
`;

export const ProductOption = styled.div`
  color: #ffa2ab;
  font-size: calc(7px + 1vmin);
  font-family: Roboto-Bold;
`;

export const MidContainer = styled.div`
  width: 30%;
  margin: 10px 0 0 0;
  padding: 0 0 30px 0;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 550px) {
    width: 80%;
  }
`;

export const InputTitle = styled.div`
  color: #c4c4c4;
  font-size: calc(9px + 1vmin);
  font-family: Roboto-Regular;
  margin: 20px 0 0 0;
`;

export const TextInput = styled.input`
  width: 100%;
  height: 4vmin;
  font-size: calc(10px + 1vmin);
  font-family: Roboto-Regular;
  outline: none;
  border: none;
  border-bottom: 1px solid #c4c4c4;
  ::placeholder {
    color: #c4c4c4;
  }
  :-ms-input-placeholder {
    color: #c4c4c4;
  }
  ::-ms-input-placeholder {
    color: #c4c4c4;
  }
`;

export const Notes = styled.div`
  font-size: calc(4px + 1vmin);
  font-family: Roboto-Medium;
`;

export const ButtonDiv = styled.div`
  width: 90%;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ff2e5c;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin: 30px auto 0 auto;
  border: none;
  outline: none;
  box-shadow: 0 5px 10px 0 #ff2e5c;
  cursor: pointer;
`;

export const ButtonText = styled.div`
  color: #fff;
  font-size: 14px;
  font-family: Roboto-Medium;
`;

export const BrandContainer = styled.div`
  width: 50%;
  @media (max-width: 1500px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const BrandProductsBanner = styled.div`
  width: 100%;
  height: 35vmin;
  display: flex;
  align-items: center;
`;

export const BannerImg = styled.img`
  width: auto;
  height: 30vmin;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const BannderSubTitleView = styled.div`
  margin: 14% 0 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const BannderSubTitle = styled.div`
  color: #ffdde0;
  font-size: 13px;
  font-family: Roboto-Regular;
  margin: 0 6px 0 6px;
`;

export const SubTitleBar = styled.div`
  width: 77px;
  height: 2px;
  background-color: rgba(255,180,186,0.7);
`;

export const BannderTitle = styled.div`
  color: white;
  font-size: 25px;
  font-family: Roboto-Regular;
  margin: 0 0 10px 0;
`;

export const TabDiv = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  margin: 0 0 30px 0;
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const Tab = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5% 0 5%;
`;

export const GrayLine = styled.div`
  width: 1px;
  height: 85px;
  background-color: #ebebeb;
`;

export const Oval = styled.div`
  color: white;
  font-size: calc(7px + 1vmin);
  font-family: Roboto-Bold;
  border-radius: 100px;
  background-color: #ff8692;
  align-items: center;
  justify-content: center;
  padding: 1.5px 13.5px 1.5px 13.5px;
`;

export const TabContents = styled.div`
  color: black;
  font-size: 13px;
  font-family: Roboto-Bold;
  text-align: center;
  line-height: 18px;
  margin: 15px 0 0 0;
`;

export const RoundDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px 0 0 0;
  @media (max-width: 1500px) {
    width: 70%;
  }
  @media (max-width: 1200px) {
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 80%;
  }
`;

export const Round = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #ffa2ab;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    width: 90px;
    height: 90px;
    border-radius: 45px;
  }
  @media (max-width: 550px) {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`;

export const RoundNumber = styled.div`
  color: #fff;
  font-size: 15px;
  font-family: Roboto-BoldItalic;
  text-align: center;
  padding: 0 10px 0 10px;
`;

export const RoundText = styled.div`
  color: #fff;
  font-size: 10px;
  font-family: Roboto-Bold;
  text-align: center;
  padding: 0 10px 0 10px;
`;

export const ProductsContainer = styled.div`
  width: 100%;
  background-color: #ffa2ab;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 0 0;
  padding: 0 0 25px 0;
`;

export const ProductsContainerTitleView = styled.div`
  width: 90%;
  height: 50px;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -25px auto 0 auto;
  box-shadow: 0 10px 6px 0 rgba(0,0,0,0.1);
`;

export const TopTitle = styled.div`
  color: #4a4a4a;
  font-size: 12px;
  font-family: Roboto-Bold;
`;

export const MidText = styled.div`
  color: #fff;
  font-size: 12.5px;
  font-family: Roboto-Bold;
  margin: 25px auto 20px auto;
`;

export const ProductsList = styled.div`
  width: calc(90% - 30px);
  height: 15vmin;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #ff838f;
  border-radius: 10px;
  margin: 0 0 12.5px 0;
  padding: 0 15px 0 15px;
`;

export const ProductsButton = styled.button`
  width: 7vmin;
  height: 7vmin;
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
`;

export const ProductsButtonImage = styled.img`
  width: 7vmin;
  height: 7vmin;
`;

export const SelectButton = styled.button`
  width: 90%;
  height: 50px;
  background-color: white;
  border: 1px solid #ff838f;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SelectView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 15px;
`;

export const ArrowButton = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SelectImage = styled.img`
  width: 18px;
  height: 10px;
`;
import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  BrandContainer,
  BrandProductsBanner,
  BannerImg,
  BannderSubTitleView,
  BannderSubTitle,
  SubTitleBar,
  BannderTitle,
  TabDiv,
  Tab,
  TabContents,
  GrayLine,
  Oval,
  RoundDiv,
  Round,
  RoundNumber,
  RoundText,
  ProductsContainer,
  ProductsContainerTitleView,
  TopTitle,
  MidText,
  ProductsList,
  ProductsButton,
  ProductsButtonImage,
  ProductImage,
  ProductDraw,
  ProductBrand,
  ProductName,
  ProductOption,
  SelectButton,
  SelectView,
  SelectImage,
  ArrowButton,
  ButtonDiv,
  Button,
  ButtonText,
} from './styles';

const BrandProducts = (props) => {

  const listData = [
    {
      name: '립케어 립 스크럽 로즈힙 오일',
      image: '/assets/sample_1.png',
      brand: '니베아', draw: 25,
      option: [ 'black', 'blue' ]
    },
    {
      name: '블랙헤드 클렌징 오일',
      image: '/assets/sample_1.png',
      brand: '이니스프리',
      draw: 25,
      option: [ 'red', 'green' ]
    },
    {
      name: '니베아 인샤워 바디로션',
      image: '/assets/sample_1.png',
      brand: '니베아',
      draw: 25,
      option: [ 'purple', 'red' ]
    },
    {
      name: '피지오겔 데일리 모이스쳐 테라피',
      image: '/assets/sample_1.png',
      brand: '피지오겔',
      draw: 25,
      option: [ 'black', 'pink' ]
    },
  ];

  const [optionModal, setOptionModal] = useState(false);
  const [optionArr, setOptionArr] = useState([]);
  const [selectProductInfo, setSelectProductInfo] = useState({
    index: null,
    name: '',
    image: '',
    barnd: '',
    option: 'dd',
    draw: ''
  });

  const checkButton = (index, item) => {
    if (selectProductInfo.index === index) {
      setSelectProductInfo({
        index: null,
        name: '',
        image: '',
        barnd: '',
        option: '',
        draw: ''
      });
      setOptionArr([]);
    } else {
      setSelectProductInfo({
        ...selectProductInfo,
        index: index,
        image: item.image,
        name: item.name,
        brand: item.brand,
        draw: item.draw
      });
      setOptionArr(item.option);
    }
  };

  const test = 'ddd'
  const handleNext = () => {
    if (selectProductInfo.index === null) {
      return alert('Please select a product!');
    } else if (selectProductInfo.option === '') {
      return alert('Please select an option!');
    } else {
      props.history.push(
        `/EnterForAnEvent/?name=${selectProductInfo.name}&image=${selectProductInfo.image}&brand=${selectProductInfo.brand}&option=${selectProductInfo.option}&draw=${selectProductInfo.draw}`
      );
    }
  };

  return (
    <Container>
      <Header>
        EVENTS
      </Header>
      <BrandContainer>
        <BrandProductsBanner>
          <BannerImg src={'/assets/BrandProductsBannerImg.png'} />
        </BrandProductsBanner>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginHorizontal: '5%', marginTop: 22.5 }}>
          <TabDiv>
            <Tab>
              <Oval>이벤트 내용</Oval>
              <TabContents>
                앱 오픈 기념{"\n"}
                제품 무료 신청 이벤트!{"\n"}
                MUA 500 Point 신청!!
              </TabContents>
            </Tab>
            <GrayLine />
            <Tab>
              <Oval>이벤트 기간</Oval>
              <TabContents>
                2020. 12. 14 부터 ~{"\n"}
                2020. 12. 31 까지
              </TabContents>
            </Tab>
          </TabDiv>
          <Oval>참여 방법</Oval>
          <RoundDiv>
            <Round>
              <RoundNumber>01</RoundNumber>
              <RoundText>뷰티 스타일을 게시합니다.</RoundText>
            </Round>
            <Round>
              <RoundNumber>02</RoundNumber>
              <RoundText>500 MUA POINT를 모읍니다.</RoundText>
            </Round>
            <Round>
              <RoundNumber>03</RoundNumber>
              <RoundText>원하시는 제품에 응모하기 클릭.</RoundText>
            </Round>
          </RoundDiv>
        </div>
        <ProductsContainer>
          <ProductsContainerTitleView>
            <TopTitle>모든 제품이 소진되기전에 응모해봐!</TopTitle>
          </ProductsContainerTitleView>
          <MidText>응모할 제품을 선택해주세요</MidText>
          {listData.map((item, index) => (
            <ProductsList key={index}>
              <div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <ProductImage src={item.image} />
                  <div style={{ height: 50, marginLeft: 5 }}>
                    <ProductDraw>{item.draw}개 추첨|신청자 수 2000 명</ProductDraw>
                    <ProductBrand>{item.brand}</ProductBrand>
                    <ProductName>{item.name}</ProductName>
                  </div>
                </div>
              </div>
              <ProductsButton onClick={() => checkButton(index, item)}>
                <ProductsButtonImage src={
                  selectProductInfo.index === index
                    ? '/assets/check_box_2_active.png'
                    : '/assets/check_box_2_inactive.png'
                } />
              </ProductsButton>
            </ProductsList>
          ))}
          <MidText>원하시는 옵션을 선택해주세요</MidText>
          <SelectButton>
            <SelectView>
              <div style={{ height: 50, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <ProductName style={{ marginRight: 10 }}>제품 옵션</ProductName>
                <ProductOption>
                  {optionArr.length === 0
                    ? '제품을 선택해주세요'
                    : selectProductInfo.option === ''
                      ? '옵션을 선택해주세요'
                      : selectProductInfo.option
                  }
                </ProductOption>
              </div>
              <ArrowButton>
                <SelectImage src={'/assets/arrow_bottom_ffa2ab.png'} />
              </ArrowButton>
            </SelectView>
          </SelectButton>
          <ButtonDiv>
            <Button onClick={handleNext}>
              <ButtonText>NEXT</ButtonText>
            </Button>
          </ButtonDiv>
        </ProductsContainer>
      </BrandContainer>
    </Container>
  )
}

export default BrandProducts;
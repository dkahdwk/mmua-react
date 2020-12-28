import React, { useState, useRef } from 'react';
import queryString from 'query-string'
import { ENUM_BORDER_COLOR } from '../util/enum';
import {
  Container,
  Header,
  ProductBackground,
  ProductContainer,
  ProductImage,
  ProductDraw,
  ProductBrand,
  ProductName,
  MidContainer,
  TextInput,
  InputTitle,
  Oval,
  Notes,
  Button,
  ButtonText,
} from './styles';

const EnterForAnEvent = (props) => {

  const [recipient, setRecipient] = useState('');
  const [phoneNumner, setPhoneNumner] = useState('');
  const [firstAddress, setFirstAddress] = useState('');
  const [secondaddress, setSecondaddress] = useState('');
  const [recipientBorder, setRecipientBorder] = useState(ENUM_BORDER_COLOR.INACTIVE);
  const [phoneBorder, setPhoneBorder] = useState(ENUM_BORDER_COLOR.INACTIVE);
  const [firstAddressBorder, setFirstAddressBorder] = useState(ENUM_BORDER_COLOR.INACTIVE);
  const [secondaddressBorder, setSecondaddressBorder] = useState();
  const recipientRef = useRef();
  const phoneNumnerRef = useRef();
  const firstAddressRef = useRef();
  const secondaddressRef = useRef();
  const { search } = props.location;
  const queryObj = queryString.parse(search);
  const { name, image, brand, option, draw } = queryObj;

  const handleApply = () => {
    if (recipient === '') {
      return alert('Please enter your username');
    } else if (phoneNumner === '') {
      return alert('Please_enter your phone number');
    } else if (firstAddress === '') {
      return alert('Please enter your address.');
    } else if (secondaddress === '') {
      return alert('Please enter your address.');
    } else {
      return alert('success!');
    }
  }

  return (
    <Container>
      <Header>
        EVENTS
      </Header>
      <ProductBackground>
        <ProductContainer>
          <ProductImage src={image} />
          <div>
            <ProductDraw>{draw} Draws|2,000 applicants</ProductDraw>
            <ProductBrand>{brand}</ProductBrand>
            <ProductName>{name}</ProductName>
          </div>
        </ProductContainer>
      </ProductBackground>
      <MidContainer>
        <InputTitle>Recipient</InputTitle>
        <TextInput
          style={{ borderColor: recipientBorder }}
          placeholder="Recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          ref={recipientRef}
          maxLength={60}
          onFocus={() => setRecipientBorder(ENUM_BORDER_COLOR.ACTIVE)}
          onBlur={() => setRecipientBorder(ENUM_BORDER_COLOR.INACTIVE)}
        />
        <InputTitle>Phone</InputTitle>
        <TextInput
          style={{ borderColor: phoneBorder }}
          placeholder="Phone"
          value={phoneNumner}
          onChange={(e) => setPhoneNumner(e.target.value)}
          ref={phoneNumnerRef}
          maxLength={30}
          onFocus={() => setPhoneBorder(ENUM_BORDER_COLOR.ACTIVE)}
          onBlur={() => setPhoneBorder(ENUM_BORDER_COLOR.INACTIVE)}
        />
        <TextInput
          style={{ borderColor: firstAddressBorder, marginTop: 20 }}
          placeholder="Address"
          value={firstAddress}
          onChange={(e) => setFirstAddress(e.target.value)}
          ref={firstAddressRef}
          maxLength={30}
          onFocus={() => setFirstAddressBorder(ENUM_BORDER_COLOR.ACTIVE)}
          onBlur={() => setFirstAddressBorder(ENUM_BORDER_COLOR.INACTIVE)}
        />
        <TextInput
          style={{ borderColor: secondaddressBorder, marginTop: 10 }}
          placeholder="Address"
          value={secondaddress}
          onChange={(e) => setSecondaddress(e.target.value)}
          ref={secondaddressRef}
          maxLength={30}
          onFocus={() => setSecondaddressBorder(ENUM_BORDER_COLOR.ACTIVE)}
          onBlur={() => setSecondaddressBorder(ENUM_BORDER_COLOR.INACTIVE)}
        />
        <div style={{ marginTop: 26.5 }}>
          <Oval style={{ position: 'absolute' }}>참고 사항</Oval>
        </div>
        <Notes style={{ marginTop: 54 }}>- 이름, 휴대폰 번호 및 주소를 모두 입력한 후 ‘응모 완료’ 버튼을 누르면 참여 완료됩니다.</Notes>
        <Notes>- 당첨 시 입력된 주소로 제품이 발송되오니 배송 주소를 정확하게 입력해주세요.</Notes>
        <Button onClick={handleApply}>
          <ButtonText>이벤트 신청하기</ButtonText>
        </Button>
      </MidContainer>
    </Container>
  )
}

export default EnterForAnEvent;
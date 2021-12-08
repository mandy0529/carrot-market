import {
  BsChatSquareDots,
  RiHome8Line,
  RiUserLine,
  ImQuestion,
  TiDocumentText,
  MdOutlineStorefront,
  MdAttachMoney,
} from '../icons/icons';

const headerList = [
  {id: 1, text: '홈', icon: <RiHome8Line />, path: '/'},
  {id: 2, text: '물건 팔기', icon: <MdAttachMoney />, path: '/create'},
  {id: 3, text: '당근 마켓', icon: <MdOutlineStorefront />, path: '/products'},
  {id: 4, text: '나의 당근', icon: <RiUserLine />, path: '/my-product'},
];

const placeList = [
  {
    id: 1,
    text: '우리 동네 질문',
    content: '궁금한 게 있을 땐 이웃에게 물어보세요.',
    icon: <ImQuestion />,
  },
  {
    id: 2,
    text: '동네 분실 센터',
    content: '무언가를 잃어버렸을 때, 함께 찾을 수 있어요.',
    icon: <TiDocumentText />,
  },
  {
    id: 3,
    text: '동네 모임',
    content: '관심사가 비슷한 이웃과 온오프라인으로 만나요.',
    icon: <BsChatSquareDots />,
  },
];

const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(number);
  return newNumber;
};

const imgTypes = ['image/png', 'image/jpeg'];

export {headerList, placeList, formatPrice, imgTypes};

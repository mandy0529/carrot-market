import {
  BsChatSquareDots,
  RiHome8Line,
  CgFileDocument,
  MdOutlineWhereToVote,
  RiUserLine,
  ImQuestion,
  TiDocumentText,
} from '../icons/icons';

const headerList = [
  {id: 1, text: '홈', icon: <RiHome8Line />},
  {id: 2, text: '동네생활', icon: <CgFileDocument />},
  {id: 3, text: '내 근처', icon: <MdOutlineWhereToVote />},
  {id: 4, text: '채팅', icon: <BsChatSquareDots />},
  {id: 5, text: '나의 당근', icon: <RiUserLine />},
];

const placeList = [
  {
    id: 1,
    text: '우리동네질문',
    content: '궁금한 게 있을 땐 이웃에게 물어보세요.',
    icon: <ImQuestion />,
  },
  {
    id: 2,
    text: '동네분실센터',
    content: '무언가를 잃어버렸을 때, 함께 찾을 수 있어요.',
    icon: <TiDocumentText />,
  },
  {
    id: 3,
    text: '동네모임',
    content: '관심사가 비슷한 이웃과 온오프라인으로 만나요.',
    icon: <BsChatSquareDots />,
  },
];
export {headerList, placeList};

import styled from '@emotion/styled';
import GoodImg from "../images/Good.png";
import Neutral from '../images/Neutral.png';
import Sad from '../images/Sad.png';

const ResultsList = styled.ul`
  list-style: none;
`;
const ResultsItem = styled.li`
  display: flex;
  align-items: center;

  &:first-of-type:before {
    content: url("${GoodImg}");
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 35px;
    transform: translate(-50%, -50%);
  }
  &:nth-of-type(2):before {
      content: url("${Neutral}");
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 35px;
      transform: translate(-50%, -50%);
    }
    &:nth-of-type(3):before {
    content: url("${Sad}");
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 35px;
      transform: translate(-50%, -50%);
    }
`;

const NoFeedback = styled.p`
  font-size: 22px;
  font-style: italic;
`;
const TotalResult = styled.p`
  font-weight: 700;
  font-style: italic;
`;

export { ResultsList, ResultsItem, NoFeedback, TotalResult };
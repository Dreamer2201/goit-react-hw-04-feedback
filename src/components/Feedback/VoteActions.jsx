import PropTypes from "prop-types";
import { BtnsFeedbackList, BtnItem, Btnfeedback } from './FeedbackFormStyled';

export default function VoteActions({ clickBtnVote }) {
    return (
        <BtnsFeedbackList>
            <BtnItem><Btnfeedback onClick={() => clickBtnVote('good')}>Good</Btnfeedback></BtnItem>
            <BtnItem><Btnfeedback onClick={() => clickBtnVote('neutral')}>Neutral</Btnfeedback></BtnItem>
            <BtnItem><Btnfeedback onClick={() => clickBtnVote('bad')}>Bad</Btnfeedback></BtnItem>
        </BtnsFeedbackList>
    );
}

VoteActions.propTypes = {
        clickBtnVote: PropTypes.func,
}
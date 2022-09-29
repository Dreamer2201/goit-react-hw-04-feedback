import { useState } from 'react';
import { Container } from './Container';
import VoteActions from './VoteActions';
import VoteResults from './VoteResults';

export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countTotalFeedback= () => {
        return good + neutral + bad;
    }
    const countPositiveFeedbackPercentage = (good) => {
        const total = countTotalFeedback();
        if (!total) {
            return 0;
        }
        return Math.round((good / total) * 100); 
    }
    const clickBtnVote = (nameBtn) => {
        switch (nameBtn) {
            case 'good':
                return setGood((prev) => prev + 1);
            case 'neutral':
                return setNeutral((prev) => prev + 1);
            case 'bad':
                return setBad((prev) => prev + 1);
            default:
                return;
        }  
    }

    const total = countTotalFeedback();
    const goodPer = countPositiveFeedbackPercentage(good);

    return (
        <div>
            <Container 
                title="Leave feedback please">
                    <VoteActions
                        clickBtnVote={clickBtnVote}
                    />
            </Container>
            <Container 
                title="Statistics">
                    <VoteResults
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        goodpersentage={goodPer}
                    />        
            </Container>
            </div>
    )      
    }


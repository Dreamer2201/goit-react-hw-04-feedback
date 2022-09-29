import { Component } from 'react';
import { Container } from './Container';
import VoteActions from './VoteActions';
import VoteResults from './VoteResults';

class Feedback extends Component {
 
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    clickBtnVote = stateName => {
        this.setState((prevState) => {
            const value = this.state[stateName];
            return {
                [stateName]: value + 1
            }
        })
    }
    countTotalFeedback () {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    countPositiveFeedbackPercentage() {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        if (!total) {
            return 0;
        }
        return Math.round((good / total) * 100);
       
    }
    
    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const goodPer = this.countPositiveFeedbackPercentage(); 
        return (
            <div>
                <Container 
                    title="Leave feedback please">
                    <VoteActions
                        clickBtnVote={this.clickBtnVote}
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
            </div>)
    }
}
export default Feedback;

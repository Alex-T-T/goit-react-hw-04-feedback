import {useState} from "react";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';
import css from './Feedback.module.css'



const FeedbackCounter = () => {
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });
    
    const { good, neutral, bad } = state;

    const handleIncrement = (event) => {
        const name = event.currentTarget.name;
        setState({ ...state, ...{ [name]: state[name] + 1 } })
    }
    
    const countTotalFeedback = () =>  {
        let totalFeedbacks = 0;
        totalFeedbacks = good + neutral + bad;

        return totalFeedbacks
    }



    const countPositiveFeedbackPercentage = () => {
        let positiveFeedbackPercentage = 0;
        positiveFeedbackPercentage =  Math.round (good / countTotalFeedback() * 100);
        return positiveFeedbackPercentage
    }


    return (
                <>

                <Section title="Please leave feedback">

                    <FeedbackOptions options={Object.keys(state)} onFeedback={handleIncrement}/>

                    <h2 className={css.counterResultsStatistics}>Statistics</h2>

                    {countTotalFeedback() === 0
                        ? (<Notification message="There is no feedback" />)
                        : <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
                    }

                    
                </Section>
            
                </>
            
        )    
}











// class FeedbackCounterOld extends React.Component {

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     }

   
//     handleIncrement = (event) => {
//         let position = event.currentTarget.name
        
//         this.setState((prevState) => ({ [position]: prevState[position] + 1 }))
//     };

    // countTotalFeedback = () => { 
        // let totalFeedbacks = 0;
        // totalFeedbacks = this.state.good + this.state.neutral + this.state.bad;

        // return totalFeedbacks 
    // }

    // countPositiveFeedbackPercentage = () => {
    //     let positiveFeedbackPercentage = 0;
    //     positiveFeedbackPercentage =  Math.round (this.state.good / this.countTotalFeedback() * 100);
    //     return positiveFeedbackPercentage
    // }

//     render() {
//         return (
//                 <>

//                 <Section title="Please leave feedback">

//                     <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement}/>

//                     <h2 className={css.counterResultsStatistics}>Statistics</h2>

//                     {this.countTotalFeedback() === 0
//                         ? (<Notification message="There is no feedback" />)
//                         : <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
//                     }

                    
//                 </Section>
            
//                 </>
            
//         )    
//     }
// }

export default FeedbackCounter;

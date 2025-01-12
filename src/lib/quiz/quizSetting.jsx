import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import React from 'react';


export const checkAnswer = (response) => {
const {questions, currentQuestionIndex, score} = useSelector((state) => state.quiz);
    const correctAnswer =  questions.questions[currentQuestionIndex].correct_answer;
    if(correctAnswer !== response ) {
        return false;

    }
    return true
}

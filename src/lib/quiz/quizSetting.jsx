import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import React from 'react';
const {questions, currentQuestionIndex, score} = useSelector((state) => state.quiz);

export const checkAnswer = (response) => {

    const correctAnswer =  questions.questions[currentQuestionIndex].correct_answer;
    if(correctAnswer !== response ) {
        return false;

    }
    return true
}

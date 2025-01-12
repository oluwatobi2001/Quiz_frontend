import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    questions : [],
    currentQuestionIndex: 0,
    score: 0,
    selectedOptions : {}

};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuestions: (state, action) =>{ state.questions = action.payload;
        state.currentQuestionIndex = 0;
        state.score = 0;
        },
        answerQuestion: (state, action) => {
            const {index, option} = action.payload;
            state.selectedOptions[index] = option;
            state.currentQuestionIndex +=1 ;

        },
        
    
    }
})
export const {setQuestions, answerQuestion} = quizSlice.actions
export default  quizSlice.reducer;

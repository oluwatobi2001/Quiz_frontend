import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    questions : [],
    currentQuestionIndex: 0,
    score: 0
};

const quizSlice = createSlice({
    name: quiz,
    initialState,
    reducers: {
        setQuestions: (state, action) =>{ state.questions = action.payload;
        state.currentQuestionIndex = 0;
        state.score = 0;
        },
        answerQuestion: (state, action) => {
            if(action.payload.isCorrect) {
                state.score += 1;
            }
            state.currentQuestionIndex +=1 ;

        },
        
    
    }
})
export const {setQuestions, answerQuestion} = quizSlice.actions
export default  quizSlice.reducer;

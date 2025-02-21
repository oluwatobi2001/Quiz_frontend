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
            const { index, option } = action.payload;
            state.selectedOptions[index] = option; // Store selected option
            state.currentQuestionIndex += 1;
            if (state.currentQuestionIndex >= state.questions.length) {
                state.currentQuestionIndex = state.questions.length - 1; // Prevent out-of-bound errors
            }
        },
        calculateScore: (state) => {
            state.score = 0; // Reset score
            state.questions?.questions?.forEach((question, index) => {
                const selectedOption = state.selectedOptions[index];
                 // Get selected option for this question
                 console.log(selectedOption)

                // Check if the selected option is correct
                if (selectedOption && question?.correct_answers?.[`${selectedOption}_correct`] === "true") {
                    state.score += 1; // Increment score for correct answers
                }
            
            });
        },
    
    }
})
export const {setQuestions, answerQuestion, calculateScore} = quizSlice.actions
export default  quizSlice.reducer;

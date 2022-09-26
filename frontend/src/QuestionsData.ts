export interface QuestionData {
    questionId: number;
    title: string;
    content: string;
    userName: string;
    created: Date;
    answers: AnswerData[];
}

export interface AnswerData {
    answerId: number;
    content: string;
    userName: string;
    created: Date;
}

const wait = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const questions: QuestionData[] = [
    {
        questionId: 1,
        title: 'Question 1',
        content: 'TypeScript seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?',
        userName: 'User 1',
        created: new Date(2018, 1, 1),
        answers: [
            {
                answerId: 1,
                content: 'Answer 1',
                userName: 'User 1',
                created: new Date(2018, 1, 1)
            },
            {
                answerId: 2,
                content: 'Answer 2',
                userName: 'User 2',
                created: new Date(2018, 1, 1)
            }
        ],
    },
    {
        questionId: 2,
        title: 'Question 2',
        content: 'TypeScript seems to be getting popular so I wondered whether it is worth my time learning it? What benefits does it give over JavaScript?',
        userName: 'User 2',
        created: new Date(2018, 1, 1),
        answers: [],
    }
];

export const getUnansweredQuestions = async (): Promise<QuestionData[]> => {
    await wait(500);
    return questions.filter(q => q.answers.length === 0);
}

export const getAnsweredQuestions = (): QuestionData[] => {
    return questions.filter(q => q.answers.length > 0);
}

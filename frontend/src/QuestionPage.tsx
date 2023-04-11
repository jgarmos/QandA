import React from 'react';
import { Page } from './Page';
import { useParams } from 'react-router-dom';

export const QuestionPage = () => {
  //   const [question, setQuestion] = React.useState<QuestionData | null>(null);
  const { questionId } = useParams();

  React.useEffect(() => {
    const doGetQuestion = async (questionId: number) => {};
    if (questionId) {
      doGetQuestion(Number(questionId));
    }
  }, [questionId]);

  return <Page title="Question Page">{null}</Page>;
};

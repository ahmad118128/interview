import { GetServerSideProps } from 'next';
import ErrorPage500 from '@/components/pages/customError500';

interface ErrorTestProps {
  statusCode: number;
}

const ErrorTest = ({ statusCode }: ErrorTestProps) => {
  return <ErrorPage500 statusCode={statusCode} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      statusCode: 500,
    },
  };
};

export default ErrorTest;

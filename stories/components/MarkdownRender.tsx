import ReactMarkdown from 'react-markdown';

export const MarkdownRender = ({ content }: { content: string }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

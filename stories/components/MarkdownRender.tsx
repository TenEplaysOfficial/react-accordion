import { FC, HTMLAttributes, ReactNode, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Components } from 'react-markdown';

type MarkdownRenderProps = {
  content: string;
};

type CodeProps = {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const MarkdownRender: FC<MarkdownRenderProps> = ({ content }) => {
  const components: Components = {
    code({ node, inline, className, children, ...props }: CodeProps) {
      const match = /language-(\w+)/.exec(className || '');

      if (!inline && match) {
        const code = String(children).replace(/\n$/, '');
        const [copied, setCopied] = useState(false);

        const handleCopy = async () => {
          try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          } catch (err) {
            console.error('Copy failed:', err);
          }
        };

        return (
          <div className="group relative">
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 z-10 cursor-pointer rounded bg-white px-2 py-1 text-xs shadow transition-all duration-150"
            >
              {copied ? '✅' : '📋'}
            </button>
            <SyntaxHighlighter
              style={prism as any}
              language={match[1]}
              PreTag="div"
              customStyle={{
                margin: 0,
                padding: '0.5rem',
                borderRadius: '6px',
              }}
              {...props}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      }

      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]}>
      {content}
    </ReactMarkdown>
  );
};

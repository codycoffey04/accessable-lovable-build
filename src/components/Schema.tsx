import { useEffect } from 'react';

interface SchemaProps {
  schema: object;
}

export const Schema = ({ schema }: SchemaProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);

  return null;
};

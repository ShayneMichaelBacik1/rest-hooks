import React, { useContext, memo, useRef, forwardRef } from 'react';

import CodeProvider from './CodeProvider';
import HooksPlayground from '../HooksPlayground';
import CodeTabContext from './CodeTabContext';

// eslint-disable-next-line react/display-name
const DemoPlayground = memo(
  forwardRef((props, ref: React.RefObject<HTMLDivElement>) => {
    const { selectedValue, values } = useContext(CodeTabContext);

    return (
      <div ref={ref}>
        {values.map(({ value, code }) => (
          <HooksPlayground
            groupId="homepage-demo"
            row
            key={value}
            hidden={value !== selectedValue}
          >
            {code}
          </HooksPlayground>
        ))}
      </div>
    );
  }),
);

interface Props<T extends string> {
  codes: { label: string; value: T; code: string }[];
  defaultValue: T;
}

export default function CodeEditor<T extends string>({
  codes,
  defaultValue,
}: Props<T>) {
  const playgroundRef = useRef();

  return (
    <CodeProvider
      defaultValue={defaultValue}
      groupId="protocol"
      values={codes}
      playgroundRef={playgroundRef}
    >
      <DemoPlayground ref={playgroundRef} />
    </CodeProvider>
  );
}

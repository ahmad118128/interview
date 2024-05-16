import { isValidElement, ReactElement } from 'react';
import { Tooltip } from '@mui/material';

export const handleArray = (data: Array<string | number | ReactElement>) => {
  const contentLength: number = data.length;
  if (isValidElement(data[0])) return data;
  if (contentLength === 0) return <span>{'_'}</span>;
  if (contentLength <= 2)
    return (
      <>
        {data.map(
          (content, i: number, arr: Array<string | number | ReactElement>) => (
            <span
              key={i}
            >{`${content}${i !== arr.length - 1 ? ' , ' : ''}`}</span>
          )
        )}
      </>
    );
  if (contentLength > 2) {
    return (
      <Tooltip
        title={
          <>
            {data.slice(2).map((content, i: number) => (
              <div style={{ padding: 5 }} key={i}>
                {content}
              </div>
            ))}
          </>
        }
      >
        <div>
          {data.slice(0, 2).map((content, i: number) => (
            <span
              key={`gp_tooltip_${i}`}
            >{`${content}${i === 1 ? ' , ... ' : ' , '}`}</span>
          ))}
        </div>
      </Tooltip>
    );
  }
};

import React, { useState } from 'react';
import { Progress } from 'antd';
import { getStrokeColor } from './progress-circle-with-label';

type ProgressItemProps = {
  name: string;
  icon?: JSX.Element;
  progressPercent: number;
  value: string;
  link: string;
};

const ProgressItem: React.FC<ProgressItemProps> = ({ name, icon, progressPercent, value, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: 'flex',
        paddingRight: '32px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch'
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '297px',
          height: '24px',
          alignItems: 'center',
          gap: '8px',
          background: isHovered ? 'rgba(22, 119, 255, 0.25)' : 'transparent',
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
          textDecoration: 'none',
          transition: 'background 0.3s ease, border 0.3s ease',
          border: isHovered ? '1px solid #1677FF' : '1px solid transparent'
        }}
      >
        <div>{icon}</div>
        {link ? (
          <a
            href={link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ textDecoration: 'none' }}
          >
            <div style={{ color: '#1677FF' }}>{name}</div>
          </a>
        ) : (
          <div style={{ color: 'rgba(0, 0, 0, 0.45)' }}>{name}</div>
        )}
      </div>
      <Progress
        percent={progressPercent}
        style={{ marginTop: '-6px' }}
        type='line'
        size='small'
        strokeColor={getStrokeColor(progressPercent)}
        format={() => <div style={{ fontSize: '14px', color: 'black' }}>{value ?? '0'}</div>}
      />
    </div>
  );
};

export default ProgressItem;

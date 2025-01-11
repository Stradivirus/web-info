// MessageQueueSection.js
import React from 'react';
import { ContentSection } from './common';

const MessageQueueSection = ({ name, subtitle, data, isExpanded, onToggle }) => (
  <ContentSection
    type="messagequeue"
    name={name}
    subtitle={subtitle}
    data={data}
    isExpanded={isExpanded}
    onToggle={onToggle}
  />
);

export default MessageQueueSection;
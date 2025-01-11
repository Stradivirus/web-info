// DatabaseSection.js
import React from 'react';
import { ContentSection } from './common';

const DatabaseSection = ({ name, subtitle, data, isExpanded, onToggle }) => (
  <ContentSection
    type="database"
    name={name}
    subtitle={subtitle}
    data={data}
    isExpanded={isExpanded}
    onToggle={onToggle}
  />
);

export default DatabaseSection;
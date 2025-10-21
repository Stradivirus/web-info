import React from 'react';
import { myDevelopmentData } from '../../../pages/TeamProject/TP2/myDevelopmentData';
import type { WorkItem } from '../../../pages/TeamProject/TP2/myDevelopmentData';

export const MyPartTP2: React.FC = () => {
  const renderWorkSection = (items: WorkItem[], sectionTitle: string, borderColor: string) => (
    <div style={{ flex: 1, padding: '0 16px' }}>
      <h3 style={{
        color: '#1f2937',
        marginBottom: '24px',
        fontSize: '22px',
        borderLeft: `4px solid ${borderColor}`,
        paddingLeft: '12px',
        fontWeight: 'bold'
      }}>
        {sectionTitle}
      </h3>
      {items.map((item: WorkItem) => (
        <div key={item.id} style={{ 
          marginBottom: '24px',
          padding: '18px',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px'
        }}>
          <h4 style={{
            color: '#059669',
            fontSize: '16px',
            margin: '0 0 10px 0',
            fontWeight: '600'
          }}>
            {item.title}
          </h4>
          <p style={{ 
            color: '#4b5563', 
            fontSize: '14px', 
            margin: '0 0 6px 0',
            lineHeight: '1.6' 
          }}>
            {item.description}
          </p>
          <p style={{ 
            color: '#6b7280', 
            fontSize: '13px', 
            margin: 0,
            lineHeight: '1.5',
            fontStyle: 'italic'
          }}>
            {item.details.join(' • ')}
          </p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="content-box">
      {/* 데이터 수집 & 정제 - 2단 레이아웃 */}
      <div style={{ 
        display: 'flex', 
        gap: '32px',
        marginBottom: '32px',
        borderBottom: '2px solid #e5e7eb',
        paddingBottom: '32px'
      }}>
        {/* 왼쪽: 데이터 수집 */}
        {renderWorkSection(myDevelopmentData.dataCollection, '📥 데이터 수집 (MongoDB)', '#3b82f6')}
        
        {/* 오른쪽: 데이터 정제 */}
        {renderWorkSection(myDevelopmentData.dataProcessing, '⚙️ 데이터 정제 (PostgreSQL)', '#7c3aed')}
      </div>

      {/* 프로젝트 성과 */}
      <div style={{ marginTop: '40px' }}>
        <h3 style={{
          color: '#1f2937',
          marginBottom: '24px',
          fontSize: '22px',
          borderLeft: '4px solid #d97706',
          paddingLeft: '12px',
          fontWeight: 'bold'
        }}>
          프로젝트 성과 및 배운 점
        </h3>
        <div style={{
          display: 'flex',
          gap: '24px'
        }}>
          {/* 왼쪽: 성과 */}
          <div style={{ flex: 1 }}>
            <div style={{
              backgroundColor: '#f0fdf4',
              border: '2px solid #bbf7d0',
              borderRadius: '12px',
              padding: '24px',
              height: '100%'
            }}>
              <span style={{
                backgroundColor: '#059669',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                성과
              </span>
              <p style={{ 
                color: '#166534', 
                fontSize: '16px', 
                marginTop: '12px', 
                marginBottom: '0',
                lineHeight: '1.8',
                fontWeight: '500',
                whiteSpace: 'pre-line'
              }}>
                {myDevelopmentData.achievements.results}
              </p>
            </div>
          </div>

          {/* 오른쪽: 배운 점 */}
          <div style={{ flex: 1 }}>
            <div style={{
              backgroundColor: '#eff6ff',
              border: '2px solid #bfdbfe',
              borderRadius: '12px',
              padding: '24px',
              height: '100%'
            }}>
              <span style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                배운 점
              </span>
              <p style={{ 
                color: '#1e40af', 
                fontSize: '16px', 
                marginTop: '12px', 
                marginBottom: '0',
                lineHeight: '1.8',
                fontWeight: '500',
                whiteSpace: 'pre-line'
              }}>
                {myDevelopmentData.achievements.learning}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

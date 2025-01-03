import React, { useState } from 'react';
// JSON 데이터 import
import redisData from './json/redisData.json';
import kafkaData from './json/kafkaData.json';
import rabbitmqData from './json/rabbitmqData.json';
import sqsData from './json/awssqsData.json';
import snsData from './json/awssnsData.json';
import mongodbData from './json/mongodbData.json';
import postgresqlData from './json/postgresqlData.json';
import oracleData from './json/oracleData.json';
import mssqlData from './json/mssqlData.json';
import mysqlData from './json/mysqlData.json';

// 컴포넌트 import
import MessageQueueSection from './MessageQueueSection';
import DatabaseSection from './DatabaseSection';
import './Database.css';

const DatabasePage = () => {
  // 하나의 상태로 통합
  const [expandedSection, setExpandedSection] = useState({
    type: null, // 'queue' 또는 'database'
    name: null
  });

  // 토글 함수 통합
  const toggleSection = (type, name) => {
    setExpandedSection(prev => 
      prev.type === type && prev.name === name 
        ? { type: null, name: null }
        : { type, name }
    );
  };

  return (
    <main className="main-content">
      <div className="main-inner">
        {/* Message Queues Container */}
        <div className="database-container">
          <h2 className="database-page-title">Message Queues</h2>
          
          <MessageQueueSection 
            name="Redis"
            subtitle="In-Memory Data Structure Store"
            data={redisData}
            isExpanded={expandedSection.type === 'queue' && expandedSection.name === 'redis'}
            onToggle={() => toggleSection('queue', 'redis')}
          />

          <MessageQueueSection 
            name="Kafka"
            subtitle="Distributed Event Streaming Platform"
            data={kafkaData}
            isExpanded={expandedSection.type === 'queue' && expandedSection.name === 'kafka'}
            onToggle={() => toggleSection('queue', 'kafka')}
          />

          <MessageQueueSection 
            name="RabbitMQ"
            subtitle="Advanced Message Queuing Protocol"
            data={rabbitmqData}
            isExpanded={expandedSection.type === 'queue' && expandedSection.name === 'rabbitmq'}
            onToggle={() => toggleSection('queue', 'rabbitmq')}
          />

          <MessageQueueSection 
            name="Amazon SQS"
            subtitle="Simple Queue Service"
            data={sqsData}
            isExpanded={expandedSection.type === 'queue' && expandedSection.name === 'sqs'}
            onToggle={() => toggleSection('queue', 'sqs')}
          />

          <MessageQueueSection 
            name="Amazon SNS"
            subtitle="Simple Notification Service"
            data={snsData}
            isExpanded={expandedSection.type === 'queue' && expandedSection.name === 'sns'}
            onToggle={() => toggleSection('queue', 'sns')}
          />
        </div>

        {/* Databases Container */}
        <div className="database-container mt-8">
          <h2 className="database-page-title">Databases</h2>
          
          <DatabaseSection 
            name="MongoDB"
            subtitle="Document-Oriented NoSQL Database"
            data={mongodbData}
            isExpanded={expandedSection.type === 'database' && expandedSection.name === 'mongodb'}
            onToggle={() => toggleSection('database', 'mongodb')}
          />

          <DatabaseSection 
            name="PostgreSQL"
            subtitle="Object-Relational Database Management System"
            data={postgresqlData}
            isExpanded={expandedSection.type === 'database' && expandedSection.name === 'postgresql'}
            onToggle={() => toggleSection('database', 'postgresql')}
          />
        
          <DatabaseSection 
            name="MySQL"
            subtitle="Open-Source Relational Database for Web Applications"
            data={mysqlData}
            isExpanded={expandedSection.type === 'database' && expandedSection.name === 'mysql'}
            onToggle={() => toggleSection('database', 'mysql')}
          />

          <DatabaseSection 
            name="Oracle"
            subtitle="Enterprise-Class Relational Database System"
            data={oracleData}
            isExpanded={expandedSection.type === 'database' && expandedSection.name === 'oracle'}
            onToggle={() => toggleSection('database', 'oracle')}
          />

          <DatabaseSection 
            name="MsSQL"
            subtitle="Robust Database for Mission-Critical Applications"
            data={mssqlData}
            isExpanded={expandedSection.type === 'database' && expandedSection.name === 'mssql'}
            onToggle={() => toggleSection('database', 'mssql')}
          />
        </div>
      </div>
    </main>
  );
};

export default DatabasePage;
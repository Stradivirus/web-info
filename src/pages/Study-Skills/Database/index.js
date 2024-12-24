import React, { useState } from 'react';
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
import MessageQueueSection from './MessageQueueSection';
import DatabaseSection from './DatabaseSection';
import './Database.css';

const DatabasePage = () => {
  const [expandedQueue, setExpandedQueue] = useState(null);
  const [expandedDatabase, setExpandedDatabase] = useState(null);

  const toggleQueue = (queue) => {
    setExpandedQueue(expandedQueue === queue ? null : queue);
  };

  const toggleDatabase = (database) => {
    setExpandedDatabase(expandedDatabase === database ? null : database);
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
            isExpanded={expandedQueue === 'redis'}
            onToggle={() => toggleQueue('redis')}
          />

          <MessageQueueSection 
            name="Kafka"
            subtitle="Distributed Event Streaming Platform"
            data={kafkaData}
            isExpanded={expandedQueue === 'kafka'}
            onToggle={() => toggleQueue('kafka')}
          />

          <MessageQueueSection 
            name="RabbitMQ"
            subtitle="Advanced Message Queuing Protocol"
            data={rabbitmqData}
            isExpanded={expandedQueue === 'rabbitmq'}
            onToggle={() => toggleQueue('rabbitmq')}
          />

          <MessageQueueSection 
            name="Amazon SQS"
            subtitle="Simple Queue Service"
            data={sqsData}
            isExpanded={expandedQueue === 'sqs'}
            onToggle={() => toggleQueue('sqs')}
          />

          <MessageQueueSection 
            name="Amazon SNS"
            subtitle="Simple Notification Service"
            data={snsData}
            isExpanded={expandedQueue === 'sns'}
            onToggle={() => toggleQueue('sns')}
          />
        </div>

        {/* Databases Container */}
        <div className="database-container mt-8">
          <h2 className="database-page-title">Databases</h2>
          
          <DatabaseSection 
            name="MongoDB"
            subtitle="Document-Oriented NoSQL Database"
            data={mongodbData}
            isExpanded={expandedDatabase === 'mongodb'}
            onToggle={() => toggleDatabase('mongodb')}
          />

          <DatabaseSection 
            name="PostgreSQL"
            subtitle="Object-Relational Database Management System"
            data={postgresqlData}
            isExpanded={expandedDatabase === 'postgresql'}
            onToggle={() => toggleDatabase('postgresql')}
          />
        
          <DatabaseSection 
            name="MySQL"
            subtitle="Open-Source Relational Database for Web Applications"
            data={mysqlData}
            isExpanded={expandedDatabase === 'mysql'}
            onToggle={() => toggleDatabase('mysql')}
          />

          <DatabaseSection 
            name="Oracle"
            subtitle="Enterprise-Class Relational Database System"
            data={oracleData}
            isExpanded={expandedDatabase === 'oracle'}
            onToggle={() => toggleDatabase('oracle')}
          />

          <DatabaseSection 
            name="MsSQL"
            subtitle="Robust Database for Mission-Critical Applications"
            data={mssqlData}
            isExpanded={expandedDatabase === 'mssql'}
            onToggle={() => toggleDatabase('mssql')}
          />
        </div>
      </div>
    </main>
  );
};

export default DatabasePage;
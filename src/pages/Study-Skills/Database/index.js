import React, { useState } from 'react';
import redisData from './json/redisData.json';
import kafkaData from './json/kafkaData.json';
import rabbitmqData from './json/rabbitmqData.json';
import sqsData from './json/awssqsData.json';
import snsData from './json/awssnsData.json';
import MessageQueueSection from './MessageQueueSection';
import './Database.css';

const DatabasePage = () => {
  const [expandedQueue, setExpandedQueue] = useState(null);

  const toggleQueue = (queue) => {
    setExpandedQueue(expandedQueue === queue ? null : queue);
  };

  return (
    <main className="main-content">
      <div className="main-inner">
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
      </div>
    </main>
  );
};

export default DatabasePage;
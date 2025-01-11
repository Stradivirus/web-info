import React from 'react';

const CommandItem = ({ cmd }) => (
  <div className="container-command-item">
    <h5>{cmd.command}</h5>
    <p>{cmd.description}</p>
    <div className="container-command-code">
      {cmd.examples ? (
        cmd.examples.map((example, i) => (
          <code key={i}>{example}</code>
        ))
      ) : (
        <code>{cmd.example}</code>
      )}
    </div>
  </div>
);

const CommandGroup = ({ title, commands }) => {
  if (!commands || commands.length === 0) return null;

  return (
    <>
      <h5>{title}</h5>
      {commands.map((cmd, index) => (
        <CommandItem key={index} cmd={cmd} />
      ))}
    </>
  );
};

const CommandSection = ({ data }) => {
  const commandTypes = {
    basic: '기본 명령어',
    pod: 'Pod 명령어',
    context: '컨텍스트 명령어',
    debugging: '디버깅 명령어',
    maintenance: '유지보수 명령어',
    container: '컨테이너 명령어',
    image: '이미지 명령어',
    network: '네트워크 명령어',
    volume: '볼륨 명령어',
    compose: 'Compose 명령어',
    system: '시스템 명령어'
  };

  if (!data || !data.commands) return null;

  return (
    <div className="container-command-section">
      <div className="container-command-card">
        <h4>명령어 가이드</h4>
        <div className="container-command-grid">
          {Object.entries(commandTypes).map(([type, title]) => (
            data.commands[type] && (
              <CommandGroup 
                key={type}
                title={title}
                commands={data.commands[type]}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommandSection;
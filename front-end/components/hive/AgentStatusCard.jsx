import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export function AgentStatusCard({ agents }) {
  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-accent">
          <span className="text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1"/>
              <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1"/>
              <path d="M12 12v6"/>
              <path d="M8 17a4 4 0 0 0 8 0"/>
              <path d="M10 7v1"/>
              <path d="M14 7v1"/>
            </svg>
          </span>
          Agent Health Monitor
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {agents.map((agent) => (
            <div 
              key={agent.id}
              className="flex items-center justify-between p-3 rounded-lg bg-white hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`agent-indicator ${
                  agent.status === 'active' ? 'bg-green-100 text-green-700' :
                  agent.status === 'idle' ? 'bg-amber-100 text-amber-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  <span className={`h-2 w-2 rounded-full ${
                    agent.status === 'active' ? 'status-active' :
                    agent.status === 'idle' ? 'status-idle' :
                    'status-error'
                  }`}></span>
                  <span>{agent.status}</span>
                </div>
                <div>
                  <p className="font-medium text-accent">{agent.name}</p>
                  <p className="text-xs text-accent/70">{agent.role}</p>
                </div>
              </div>
              <div className="text-xs text-accent/70">
                Last check: {new Date(agent.lastCheck).toLocaleTimeString()}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
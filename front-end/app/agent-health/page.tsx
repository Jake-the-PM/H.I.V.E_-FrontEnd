'use client';

import React, { useEffect, useState } from 'react';
import { Agent, getAllAgents, auditAllAgents } from '../components/hive/agent-registry';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function AgentHealthPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Initialize agents on page load
    const loadedAgents = getAllAgents();
    setAgents(loadedAgents);
    
    // Periodically update agent statuses
    const interval = setInterval(() => {
      setAgents(getAllAgents());
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleAudit = () => {
    setLoading(true);
    
    // Simulate a network delay
    setTimeout(() => {
      const auditedAgents = auditAllAgents();
      setAgents([...auditedAgents]);
      setLoading(false);
      
      // Show a toast notification
      alert('System audit completed');
    }, 1500);
  };
  
  const getStatusColor = (status: 'active' | 'idle' | 'error') => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'idle':
        return 'bg-amber-100 text-amber-700 border-amber-300';
      case 'error':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(date);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Agent Health Monitor</h1>
        <Button onClick={handleAudit} disabled={loading} className="shrink-0">
          {loading ? (
            <>
              <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.25" />
                <path d="M21 3v9h-9" />
              </svg>
              Auditing...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.25" />
                <path d="M21 3v9h-9" />
              </svg>
              Run System Audit
            </>
          )}
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {agents.map((agent) => (
          <Card key={agent.id} className="overflow-hidden">
            <div className={`h-1 w-full ${
              agent.status === 'active' ? 'bg-green-500' :
              agent.status === 'idle' ? 'bg-amber-500' :
              'bg-red-500'
            }`} />
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">{agent.name}</CardTitle>
                <div className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(agent.status)}`}>
                  {agent.status}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">Agent ID: {agent.id}</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium">Role</div>
                  <div className="text-sm">{agent.role}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Description</div>
                  <div className="text-sm">{agent.description}</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Last Check</div>
                  <div className="text-sm">{formatDate(agent.lastCheck)}</div>
                </div>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
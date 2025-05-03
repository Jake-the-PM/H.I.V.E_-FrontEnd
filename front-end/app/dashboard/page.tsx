'use client';

import React, { useEffect, useState } from 'react';
import { DashboardStats } from '../components/hive/dashboard-stats';
import { AgentStatusCard } from '../components/hive/agency-status-card';
import { getAllAgents, Agent, auditAllAgents } from '../components/hive/agent-registry';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function DashboardPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  
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
    const auditedAgents = auditAllAgents();
    setAgents([...auditedAgents]);
    
    // Show a toast notification
    // In a real implementation, this would use a proper toast library
    alert('System audit completed');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button onClick={handleAudit} className="shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.25" />
            <path d="M21 3v9h-9" />
          </svg>
          Run System Audit
        </Button>
      </div>
      
      <DashboardStats />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AgentStatusCard agents={agents} />
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.9 19.1C2 16.2 1 13.4 1 12c0-2 2-6 11-6s11 4 11 6c0 1.4-1 4.2-3.9 7.1"></path>
                  <path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0"></path>
                </svg>
              </span>
              New Leads
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'John Smith', address: '123 Main St, Anytown', service: 'Solar Installation', date: '2025-05-04' },
                { name: 'Sarah Johnson', address: '456 Oak Ave, Springfield', service: 'HVAC Maintenance', date: '2025-05-05' },
                { name: 'Michael Brown', address: '789 Pine Rd, Westville', service: 'Kitchen Remodel', date: '2025-05-06' },
              ].map((lead, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-muted/50 transition-colors">
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">{lead.address}</p>
                    <div className="mt-1 text-xs bg-muted inline-block px-2 py-0.5 rounded-full">
                      {lead.service}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {lead.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="7" height="9" x="3" y="3" rx="1" />
                  <rect width="7" height="5" x="14" y="3" rx="1" />
                  <rect width="7" height="9" x="14" y="12" rx="1" />
                  <rect width="7" height="5" x="3" y="16" rx="1" />
                </svg>
              </span>
              Open Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'System Doctor Error', status: 'High', agent: 'Agent013', time: '5 mins ago' },
                { title: 'Workforce Scheduler Offline', status: 'Medium', agent: 'Agent004', time: '30 mins ago' },
                { title: 'License Access Issue', status: 'Low', agent: 'Agent024', time: '15 mins ago' },
              ].map((issue, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${
                      issue.status === 'High' ? 'bg-red-500' :
                      issue.status === 'Medium' ? 'bg-amber-500' :
                      'bg-green-500'
                    }`} />
                    <div>
                      <p className="font-medium">{issue.title}</p>
                      <p className="text-xs text-muted-foreground">{issue.agent}</p>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {issue.time}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
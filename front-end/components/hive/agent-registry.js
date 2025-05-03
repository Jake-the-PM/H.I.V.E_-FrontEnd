// This is a mock implementation of the agent registry for the H.I.V.E CRM

export const agents = [
  {
    id: '000',
    name: 'Meta-Agent Supervisor',
    role: 'System monitor and controller',
    status: 'active',
    lastCheck: new Date().toISOString(),
    description: 'Audits and manages other agents'
  },
  {
    id: '002',
    name: 'Lead Router',
    role: 'Lead distribution',
    status: 'active',
    lastCheck: new Date().toISOString(),
    description: 'Routes incoming leads to appropriate sales channels'
  },
  {
    id: '004',
    name: 'Workforce Forecaster',
    role: 'Resource planning',
    status: 'idle',
    lastCheck: new Date(Date.now() - 30 * 60000).toISOString(),
    description: 'Predicts workforce needs based on upcoming projects'
  },
  {
    id: '010',
    name: 'Installer Portal Handler',
    role: 'Field operations',
    status: 'active',
    lastCheck: new Date().toISOString(),
    description: 'Manages installer portal and field operations'
  },
  {
    id: '011',
    name: 'Installer Performance Tracker',
    role: 'Performance metrics',
    status: 'active',
    lastCheck: new Date().toISOString(),
    description: 'Tracks field installer performance metrics'
  },
  {
    id: '013',
    name: 'System Doctor',
    role: 'System diagnostics',
    status: 'error',
    lastCheck: new Date(Date.now() - 2 * 60000).toISOString(),
    description: 'Diagnoses and repairs system issues'
  },
  {
    id: '022',
    name: 'AI Co-Pilot',
    role: 'User assistance',
    status: 'active',
    lastCheck: new Date().toISOString(),
    description: 'Assists users with complex tasks and decision making'
  },
  {
    id: '023',
    name: 'License Manager',
    role: 'License tracking',
    status: 'active',
    lastCheck: new Date().toISOString(),
    description: 'Manages software licenses and compliance'
  },
  {
    id: '024',
    name: 'License Access Manager',
    role: 'Access control',
    status: 'idle',
    lastCheck: new Date(Date.now() - 15 * 60000).toISOString(), 
    description: 'Controls access to licensed features'
  }
];

// Mock function to simulate auditing agents
export function auditAllAgents() {
  // This would be a real API call in a production environment
  return agents;
}

// Mock function to initialize the Meta-Agent
export function initializeMetaAgentSystem() {
  console.log('H.I.V.E Meta-Agent Initialized');
  return {
    auditAllAgents,
    getAllAgents: () => agents,
  };
}
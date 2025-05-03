// This is a mock implementation of the agent registry

export interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'active' | 'idle' | 'error';
  lastCheck: string;
  description: string;
}

class Agent000 {
  private agents: Map<string, Agent> = new Map();
  
  constructor() {
    this.initializeAgents();
  }
  
  private initializeAgents() {
    const defaultAgents: Agent[] = [
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
    
    defaultAgents.forEach(agent => {
      this.agents.set(agent.id, agent);
    });
  }
  
  public registerAgent(agent: Agent) {
    this.agents.set(agent.id, agent);
  }
  
  public registerAllAgents(agents: Agent[]) {
    agents.forEach(agent => this.registerAgent(agent));
  }
  
  public getAgent(id: string): Agent | undefined {
    return this.agents.get(id);
  }
  
  public getAllAgents(): Agent[] {
    return Array.from(this.agents.values());
  }
  
  public updateAgentStatus(id: string, status: 'active' | 'idle' | 'error') {
    const agent = this.agents.get(id);
    if (agent) {
      agent.status = status;
      agent.lastCheck = new Date().toISOString();
      this.agents.set(id, agent);
    }
  }
  
  public auditAllAgents() {
    // In a real implementation, this would check the actual status of each agent
    // For demo purposes, we'll just randomly update some statuses
    const agentIds = Array.from(this.agents.keys());
    const randomIndex = Math.floor(Math.random() * agentIds.length);
    const randomAgent = this.agents.get(agentIds[randomIndex]);
    
    if (randomAgent) {
      const statuses: ('active' | 'idle' | 'error')[] = ['active', 'idle', 'error'];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      randomAgent.status = randomStatus;
      randomAgent.lastCheck = new Date().toISOString();
      this.agents.set(randomAgent.id, randomAgent);
    }
    
    // Always make sure Meta-Agent000 is active
    const metaAgent = this.agents.get('000');
    if (metaAgent) {
      metaAgent.status = 'active';
      metaAgent.lastCheck = new Date().toISOString();
      this.agents.set('000', metaAgent);
    }
    
    return this.getAllAgents();
  }
}

export const agent000 = new Agent000();

// For global access
if (typeof window !== 'undefined') {
  (window as any).hiveAgentSystem = agent000;
}

export function initializeMetaAgentSystem() {
  // Additional initialization if needed
  return agent000;
}

export function getAllAgents(): Agent[] {
  return agent000.getAllAgents();
}

export function auditAllAgents(): Agent[] {
  return agent000.auditAllAgents();
}
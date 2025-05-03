import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface DashboardStat {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  change?: {
    value: string;
    type: 'positive' | 'negative' | 'neutral';
  };
}

export function DashboardStats() {
  const stats: DashboardStat[] = [
    {
      title: "Today's Jobs",
      value: 12,
      description: "Active installations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
          <path d="m2 13 1.5-3 1.5 3" />
          <path d="M4 13h2.5" />
          <path d="M14 13h2.5" />
          <path d="M16.5 10v3" />
          <path d="M9 16v-3a2 2 0 0 1 2-2h1.5" />
          <path d="M11 13h2" />
        </svg>
      ),
      change: {
        value: "+2 from yesterday",
        type: "positive",
      },
    },
    {
      title: "New Leads",
      value: 24,
      description: "Potential customers",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.9 19.1C2 16.2 1 13.4 1 12c0-2 2-6 11-6s11 4 11 6c0 1.4-1 4.2-3.9 7.1"></path>
          <path d="M9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0"></path>
        </svg>
      ),
      change: {
        value: "+8 from last week",
        type: "positive",
      },
    },
    {
      title: "Monthly Revenue",
      value: "$45,281",
      description: "May 2025",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" />
          <line x1="2" x2="22" y1="20" y2="20" />
        </svg>
      ),
      change: {
        value: "+12.5% from April",
        type: "positive",
      },
    },
    {
      title: "Open Issues",
      value: 5,
      description: "Requires attention",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 2h8" />
          <path d="M9 2v6.4a3 3 0 0 0 1.8 2.8L12 12l1.2-.8a3 3 0 0 0 1.8-2.8V2" />
          <path d="M12 12v6" />
          <path d="M5 19h14" />
          <path d="M5 8a4 4 0 0 1 5-3.8" />
          <path d="M19 8a4 4 0 0 0-5-3.8" />
        </svg>
      ),
      change: {
        value: "-2 from yesterday",
        type: "positive",
      },
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
              {stat.icon}
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            {stat.change && (
              <div className={`mt-2 text-xs ${
                stat.change.type === 'positive' ? 'text-green-600' : 
                stat.change.type === 'negative' ? 'text-red-600' : 
                'text-muted-foreground'
              }`}>
                {stat.change.value}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
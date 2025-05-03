import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';

export default function ClientPortalPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="header-1">Client Portal</h1>
          <p className="text-accent/70">Welcome back, John Smith</p>
        </div>
        <Button className="shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
          Book Appointment
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <span className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m8 14 2.5-2.5 2.5 2.5 4-4" />
                </svg>
              </span>
              Your Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Solar Panel Installation', status: 'Scheduled', date: '2025-05-15', completion: 0 },
                { name: 'Home Security System', status: 'In Progress', date: '2025-05-01', completion: 45 },
                { name: 'Smart Home Integration', status: 'Completed', date: '2025-04-15', completion: 100 },
              ].map((project, index) => (
                <div 
                  key={index}
                  className="border rounded-lg p-4 hover:bg-secondary/50 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium text-accent">{project.name}</h3>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Completed' ? 'bg-green-100 text-green-700' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-amber-100 text-amber-700'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="text-sm text-accent/70 mb-3">
                    {project.status === 'Completed' ? 'Completed on:' : 
                     project.status === 'In Progress' ? 'Started on:' : 
                     'Scheduled for:'} {project.date}
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2 mb-1">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-right text-accent/70">
                    {project.completion}% Complete
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <span className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" />
                  <path d="m2 13 1.5-3 1.5 3" />
                  <path d="M4 13h2.5" />
                  <path d="M14 13h2.5" />
                  <path d="M16.5 10v3" />
                  <path d="M9 16v-3a2 2 0 0 1 2-2h1.5" />
                  <path d="M11 13h2" />
                </svg>
              </span>
              Submit Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-accent">Select Project</label>
                <select className="hive-input">
                  <option value="" disabled selected>Choose a project...</option>
                  <option value="solar">Solar Panel Installation</option>
                  <option value="security">Home Security System</option>
                  <option value="smart-home">Smart Home Integration</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-accent">Rating</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      type="button"
                      className="text-primary hover:text-primary/80 focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="feedback" className="text-sm font-medium text-accent">Tell us how we did!</label>
                <textarea 
                  className="hive-input min-h-[120px]" 
                  placeholder="Share your experience with our services..."
                ></textarea>
              </div>
              
              <div>
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded border-accent/30 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-accent/80">Allow this review to be shared publicly</span>
                </label>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Submit Review
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-accent">
            <span className="text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </span>
            Refer a Friend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-accent/80">Share your unique referral code with friends and earn rewards when they become customers!</p>
            
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  value="JOHNSMITH2025" 
                  readOnly 
                  className="hive-input pr-24" 
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-0 top-0 h-full px-3"
                >
                  Copy
                </Button>
              </div>
            </div>
            
            <div className="bg-secondary rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-accent/70">Referrals Earned</div>
                <div className="text-2xl font-bold text-accent">5</div>
              </div>
              <div>
                <div className="text-xs text-accent/70">Rewards Earned</div>
                <div className="text-2xl font-bold text-accent">$250</div>
              </div>
              <div>
                <div className="text-xs text-accent/70">Pending Referrals</div>
                <div className="text-2xl font-bold text-accent">2</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                Facebook
              </Button>
              <Button variant="outline" className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                Twitter
              </Button>
              <Button variant="outline" className="flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
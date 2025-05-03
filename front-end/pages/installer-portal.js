import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';

export default function InstallerPortalPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="header-1">Installer Portal</h1>
        <Button className="shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
          </svg>
          Book Time Off
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <span className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
                  <path d="M12 11h4" />
                  <path d="M12 16h4" />
                  <path d="M8 11h.01" />
                  <path d="M8 16h.01" />
                </svg>
              </span>
              Assigned Jobs Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { id: 'JOB-2025-0501', client: 'John Smith', address: '123 Main St, Anytown', time: '9:00 AM - 11:00 AM', type: 'Installation' },
                { id: 'JOB-2025-0502', client: 'Sarah Johnson', address: '456 Oak Ave, Springfield', time: '1:00 PM - 3:00 PM', type: 'Service Call' },
                { id: 'JOB-2025-0503', client: 'Michael Brown', address: '789 Pine Rd, Westville', time: '4:00 PM - 5:00 PM', type: 'Inspection' },
              ].map((job, index) => (
                <div 
                  key={index}
                  className="flex flex-col gap-1 p-4 rounded-lg border hover:bg-secondary/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-accent">{job.client}</p>
                    <div className="text-xs bg-primary/10 text-accent px-2 py-0.5 rounded-full">
                      {job.type}
                    </div>
                  </div>
                  <p className="text-sm text-accent/70">{job.address}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-accent/70">{job.id}</p>
                    <p className="text-sm font-medium text-accent">{job.time}</p>
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
                  <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                  <path d="M8 11V9" />
                  <path d="M12 15v-2" />
                  <path d="M16 11V9" />
                  <path d="M16 19v-2" />
                  <path d="M8 19v-2" />
                  <path d="M4 15v-2" />
                  <path d="M20 15v-2" />
                  <path d="M4 11V9" />
                  <path d="M20 11V9" />
                </svg>
              </span>
              Upload Job Photos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="jobId" className="text-sm font-medium text-accent">Select Job</label>
                <select className="hive-input">
                  <option value="" disabled selected>Choose a job...</option>
                  <option value="JOB-2025-0501">JOB-2025-0501 - John Smith</option>
                  <option value="JOB-2025-0502">JOB-2025-0502 - Sarah Johnson</option>
                  <option value="JOB-2025-0503">JOB-2025-0503 - Michael Brown</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="photoType" className="text-sm font-medium text-accent">Photo Type</label>
                <select className="hive-input">
                  <option value="" disabled selected>Select photo type...</option>
                  <option value="before">Before Work</option>
                  <option value="after">After Work</option>
                  <option value="issue">Issue Documentation</option>
                </select>
              </div>
              
              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="picture" className="text-sm font-medium text-accent">
                  Upload Photos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-accent/30 px-6 py-10 bg-secondary/30">
                  <div className="text-center">
                    <svg className="mx-auto h-12 w-12 text-accent/50" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
                      <line x1="16" x2="22" y1="5" y2="5" />
                      <line x1="19" x2="19" y1="2" y2="8" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <div className="mt-4 flex text-sm leading-6 text-accent/60">
                      <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-semibold text-primary focus-within:outline-none">
                        <span>Upload files</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-accent/60">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium text-accent">Notes</label>
                <textarea 
                  className="hive-input min-h-[100px]" 
                  placeholder="Add any additional notes about the job or photos..."
                ></textarea>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              Submit Job Photos
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
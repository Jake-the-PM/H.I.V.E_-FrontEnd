'use client';

import React, { useState } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 1500);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen -mt-16">
      <div className="w-full max-w-md px-8">
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <span className="font-bold text-primary-foreground text-2xl">H</span>
          </div>
          <h1 className="text-3xl font-bold">H.I.V.E</h1>
          <p className="text-muted-foreground">Human Intelligence Virtual Ecosystem</p>
        </div>
        
        <Card className="honeycomb">
          <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <button 
                    type="button" 
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.83 6.72 2.25" />
                      <path d="M21 3v9h-9" />
                    </svg>
                    Logging in...
                  </>
                ) : (
                  'Log In'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-xs text-center text-muted-foreground mt-2">
              By logging in, you agree to our <a href="#" className="underline underline-offset-4">Terms of Service</a> and <a href="#" className="underline underline-offset-4">Privacy Policy</a>.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
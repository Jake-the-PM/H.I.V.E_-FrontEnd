import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/Card';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const handleLogin = (e) => {
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
          <div className="mb-4 h-24 w-auto">
            <img 
              src="/images/HIVE_Logo.png" 
              alt="H.I.V.E Logo" 
              className="h-full w-auto object-contain" 
            />
          </div>
          <p className="text-accent/70 mt-2">Human Intelligence Virtual Ecosystem</p>
        </div>
        
        <Card className="honeycomb">
          <CardHeader>
            <CardTitle className="text-accent">Log In</CardTitle>
            <CardDescription className="text-accent/70">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-accent">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  className="hive-input"
                  placeholder="name@example.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium text-accent">Password</label>
                  <button 
                    type="button" 
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                <input 
                  id="password" 
                  type="password"
                  className="hive-input" 
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
            <p className="text-xs text-center text-accent/70 mt-2">
              By logging in, you agree to our <a href="#" className="underline underline-offset-4 text-primary">Terms of Service</a> and <a href="#" className="underline underline-offset-4 text-primary">Privacy Policy</a>.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
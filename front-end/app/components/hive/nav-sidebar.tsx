import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface NavSidebarProps {
  className?: string;
}

export function NavSidebar({ className }: NavSidebarProps) {
  const navItems: NavItem[] = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
    },
    {
      title: 'Agent Health',
      href: '/agent-health',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      title: 'Jobs',
      href: '/jobs',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z" />
          <path d="M12 11h4" />
          <path d="M12 16h4" />
          <path d="M8 11h.01" />
          <path d="M8 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Installer Portal',
      href: '/installer-portal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Client Portal',
      href: '/client-portal',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <aside 
      className={cn(
        "fixed inset-y-0 left-0 z-50 hidden w-72 border-r bg-card px-4 py-8 sm:flex flex-col",
        className
      )}
    >
      <div className="flex items-center gap-2 px-4">
        <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-primary">
          <span className="font-bold text-primary-foreground text-xl">H</span>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full border-2 border-background"></div>
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tighter">H.I.V.E</h1>
          <p className="text-xs text-muted-foreground">Human Intelligence Virtual Ecosystem</p>
        </div>
      </div>

      <nav className="mt-10 flex-1 space-y-1 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </nav>

      <div className="mt-auto px-4">
        <div className="honeycomb rounded-lg bg-muted p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
                <path d="M16 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
                <path d="M12 12v6" />
                <path d="M8 17a4 4 0 0 0 8 0" />
                <path d="M10 7v1" />
                <path d="M14 7v1" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium">Meta-Agent000</h4>
              <p className="text-xs text-muted-foreground">System online</p>
            </div>
          </div>
          <div className="mt-3">
            <button 
              className="w-full rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
            >
              Run System Audit
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
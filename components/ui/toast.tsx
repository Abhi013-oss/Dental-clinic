'use client';

import * as React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message?: string;
}

interface ToastContextType {
  toasts: ToastMessage[];
  showToast: (toast: Omit<ToastMessage, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const showToast = React.useCallback((toast: Omit<ToastMessage, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3 max-w-md w-full px-4 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={cn(
              'pointer-events-auto flex items-start justify-between rounded-xl p-4 shadow-xl border backdrop-blur-lg transition-all animate-in slide-in-from-bottom-5 duration-300',
              toast.type === 'success' && 'bg-obsidian-900/90 text-ivory border-gold-500/40',
              toast.type === 'error' && 'bg-destructive/90 text-white border-destructive',
              toast.type === 'info' && 'glass-panel-gold text-foreground border-gold-500/30'
            )}
          >
            <div className="flex items-start space-x-3">
              {toast.type === 'success' && <CheckCircle2 className="h-5 w-5 text-gold-400 mt-0.5 shrink-0" />}
              {toast.type === 'error' && <AlertCircle className="h-5 w-5 text-white mt-0.5 shrink-0" />}
              <div>
                <h4 className="text-sm font-semibold tracking-wide">{toast.title}</h4>
                {toast.message && <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{toast.message}</p>}
              </div>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Dismiss toast notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

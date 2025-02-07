'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function LoadingProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoadingContext.Provider>
    );
}

export function useLoading() {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
}

// Define the type for project context
interface ProjectContextType {
    currentProject: any;
    setCurrentProject: (project: any) => void;
}

// Create context with initial value
export const ProjectContext = createContext<ProjectContextType | undefined>(undefined);     
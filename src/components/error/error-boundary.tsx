"use client";
import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
   children: React.ReactNode;
   fallback: React.ReactNode;
}

interface ErrorBoundaryState {
   hasError: boolean;
   error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props: ErrorBoundaryProps) {
      super(props);

      // Define a state variable to track whether is an error or not
      this.state = { hasError: false, error: null };
   }
   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
      // Update state so the next render will show the fallback UI
      return { hasError: true, error };
   }
   componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
      // You can use your own error logging service here
      console.error("Error caught : ", error, errorInfo);
   }
   render(): React.ReactNode {
      if (this.state.hasError) {
         // You can render any custom fallback UI
         return this.props.fallback;
      }
      return this.props.children;
   }
}

export default ErrorBoundary;
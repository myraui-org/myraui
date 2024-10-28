import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cn } from '@nextui-org/react';

const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>>(
  ({ className, ...props }, ref) => {
    return (
      <ToastPrimitives.Action
        asChild
        ref={ref}
        className={cn(
          'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
          className
        )}
        {...props}
      ></ToastPrimitives.Action>
    );
  }
);
ToastAction.displayName = 'MyraUI.' + ToastPrimitives.Action.displayName;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

export default ToastAction;

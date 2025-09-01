// src/components/ui/Tooltip.tsx
'use client';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

export default function Tooltip({ content, children }: { content: string; children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content className="bg-gray-800 text-white p-2 rounded-md">
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
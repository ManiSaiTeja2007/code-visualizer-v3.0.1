// src/components/ui/Button.tsx
'use client';
import { ButtonHTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      },
    },
    defaultVariants: { variant: 'primary' },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={buttonVariants({ variant, className })} {...props} />;
}
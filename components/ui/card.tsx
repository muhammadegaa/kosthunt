import React from 'react'

interface CardProps {
  children: React.ReactNode;
  className?: string;
}
interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}
interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}
interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => {
  return <div className={`card-title ${className}`}>{children}</div>
}

export const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <div className={`card-header ${className}`}>{children}</div>
}

export const CardDescription = ({ children, className }: CardDescriptionProps) => {
  return <div className={`card-description ${className}`}>{children}</div>
}

export const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={`card-content ${className}`}>{children}</div>
}

export const Card = ({ children, className }: CardProps) => {
  return <div className={`card ${className}`}>{children}</div>
}

// Removed duplicate component declarations
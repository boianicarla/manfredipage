import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface QuoteRequest {
  origin: string;
  destination: string;
  cargoType: string;
}

export interface AIResponse {
  advice: string;
  estimatedEffort: string;
}
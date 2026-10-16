// Sözleşme kaynağı: docs/contracts/common.contract.md
// Frontend'deki frontend/types/common.ts ile birebir aynı tutulur (karar K-03).

export interface SourceInfo {
  sourceName: string;
  sourceUrl: string | null;
  documentDate: string | null;
  validFrom: string | null;
  validUntil: string | null;
  retrievedAt: string;
  lastVerifiedAt: string;
}

export interface Money {
  /** En küçük birim (kuruş). 12550 = 125,50 TL */
  amountMinor: number;
  currency: 'TRY';
}

export interface PageMeta {
  page: number;
  pageSize: number;
  total: number;
}

export interface ApiResponse<T> {
  data: T;
}

export interface ApiListResponse<T> {
  data: T[];
  meta: PageMeta;
}

export type ApiErrorCode =
  | 'VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'RATE_NOT_FOUND'
  | 'RATE_LIMITED'
  | 'INTERNAL_ERROR'
  | 'UPSTREAM_ERROR';

export interface ApiErrorBody {
  error: {
    code: ApiErrorCode;
    message: string;
    details?: { field: string; issue: string }[];
  };
}

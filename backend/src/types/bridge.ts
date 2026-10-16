// Sözleşme kaynağı: docs/contracts/bridges.contract.md
// Frontend'deki frontend/types/bridge.ts ile birebir aynı tutulur (karar K-03).

import type { Money, SourceInfo } from './common.js';

export type StructureKind = 'bridge' | 'tunnel';

export type TollStatus = 'toll' | 'free' | 'unknown';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface StructureSummary {
  slug: string;
  kind: StructureKind;
  name: string;
  provinces: string[];
  tollStatus: TollStatus;
}

export interface StructureRate {
  /** KGM sınıf kodu; liste tolls.contract.md'de sabitlenecek */
  vehicleClass: string;
  price: Money;
  /** YYYY-MM-DD */
  validFrom: string;
  /** YYYY-MM-DD; null = hâlâ geçerli */
  validUntil: string | null;
}

export interface StructureDetail extends StructureSummary {
  operator: string | null;
  coordinates: Coordinates | null;
  lengthMeters: number | null;
  openedYear: number | null;
  description: string | null;
  /** YYYY-MM-DD; rates bu tarihe göre seçilmiştir */
  rateDate: string;
  rates: StructureRate[];
  /** rates doluysa null olamaz */
  source: SourceInfo | null;
}

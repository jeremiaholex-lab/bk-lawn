export type VehicleSizeId = 'sedan' | 'suv' | 'truck';

export interface VehicleSize {
  id: VehicleSizeId;
  name: string;
  categoryLabel: string;
  examples: string;
  priceOffset: number;
}

export interface DetailingPackage {
  id: string;
  name: string;
  tagline: string;
  basePrice: number; // For sedan
  durationHours: string;
  popular?: boolean;
  features: string[];
  recommendedFor: string;
  protectionRating: number; // 1-5
}

export interface AddOnOption {
  id: string;
  name: string;
  description: string;
  price: number;
  popular?: boolean;
}

export interface ZipValidationResult {
  isCovered: boolean;
  town?: string;
  zipCode: string;
  message: string;
  tripFee: number;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  vehicleMakeModel: string;
  vehicleSize: VehicleSizeId;
  selectedPackageId: string;
  selectedAddOns: string[];
  preferredLocation: string;
  preferredDate: string;
  preferredTimeOfDay: 'morning' | 'midday' | 'afternoon';
  specialRequests: string;
}

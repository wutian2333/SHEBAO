export interface SocialInsuranceConfig {
  city: string;
  pension: number;
  medical: number;
  unemployment: number;
  injury: number;
  maternity: number;
  housingFund: number;
}

export interface CalculationResult {
  baseSalary: number;
  personalPayment: {
    pension: number;
    medical: number;
    unemployment: number;
    housingFund: number;
    total: number;
  };
  companyPayment: {
    pension: number;
    medical: number;
    unemployment: number;
    injury: number;
    maternity: number;
    housingFund: number;
    total: number;
  };
}

export interface CityOption {
  value: string;
  label: string;
}

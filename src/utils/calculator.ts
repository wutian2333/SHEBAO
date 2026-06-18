import { CalculationResult } from '../types';
import { cityConfigs, companyConfigs } from '../data/cityConfigs';

export function calculateInsurance(baseSalary: number, city: string): CalculationResult {
  const personalConfig = cityConfigs[city];
  const companyConfig = companyConfigs[city];

  const personalPayment = {
    pension: Math.round(baseSalary * (personalConfig.pension / 100)),
    medical: Math.round(baseSalary * (personalConfig.medical / 100)),
    unemployment: Math.round(baseSalary * (personalConfig.unemployment / 100)),
    housingFund: Math.round(baseSalary * (personalConfig.housingFund / 100)),
    total: 0,
  };

  personalPayment.total = 
    personalPayment.pension + 
    personalPayment.medical + 
    personalPayment.unemployment + 
    personalPayment.housingFund;

  const companyPayment = {
    pension: Math.round(baseSalary * (companyConfig.pension / 100)),
    medical: Math.round(baseSalary * (companyConfig.medical / 100)),
    unemployment: Math.round(baseSalary * (companyConfig.unemployment / 100)),
    injury: Math.round(baseSalary * (companyConfig.injury / 100)),
    maternity: Math.round(baseSalary * (companyConfig.maternity / 100)),
    housingFund: Math.round(baseSalary * (companyConfig.housingFund / 100)),
    total: 0,
  };

  companyPayment.total = 
    companyPayment.pension + 
    companyPayment.medical + 
    companyPayment.unemployment + 
    companyPayment.injury + 
    companyPayment.maternity + 
    companyPayment.housingFund;

  return {
    baseSalary,
    personalPayment,
    companyPayment,
  };
}

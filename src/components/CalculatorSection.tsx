import { useState } from 'react';
import { cityOptions } from '../data/cityConfigs';
import { calculateInsurance } from '../utils/calculator';
import { CalculationResult } from '../types';
import ResultSection from './ResultSection';

export default function CalculatorSection() {
  const [baseSalary, setBaseSalary] = useState<string>('10000');
  const [city, setCity] = useState<string>('beijing');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleCalculate = () => {
    const salary = parseFloat(baseSalary);
    if (isNaN(salary) || salary <= 0) {
      alert('请输入有效的工资金额');
      return;
    }
    const calculationResult = calculateInsurance(salary, city);
    setResult(calculationResult);
    setHasCalculated(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setBaseSalary(value);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">社保测算</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="animate-slide-in">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              缴费基数（元/月）
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">¥</span>
              <input
                type="text"
                value={baseSalary}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="请输入工资基数"
              />
            </div>
          </div>

          <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              所在城市
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white appearance-none cursor-pointer"
            >
              {cityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleCalculate}
          className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          开始计算
        </button>
      </div>

      {hasCalculated && result && <ResultSection result={result} />}
    </div>
  );
}

import { CalculationResult } from '../types';

interface ResultSectionProps {
  result: CalculationResult;
}

export default function ResultSection({ result }: ResultSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 animate-fade-in-up">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">计算结果</h2>
      
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <p className="text-sm text-blue-600 mb-2">缴费基数</p>
          <p className="text-3xl font-bold text-blue-600">¥{result.baseSalary.toLocaleString()}</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-6 text-center">
          <p className="text-sm text-orange-600 mb-2">个人缴纳</p>
          <p className="text-3xl font-bold text-orange-600">¥{result.personalPayment.total.toLocaleString()}</p>
        </div>
        <div className="bg-green-50 rounded-xl p-6 text-center">
          <p className="text-sm text-green-600 mb-2">单位缴纳</p>
          <p className="text-3xl font-bold text-green-600">¥{result.companyPayment.total.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">个人缴纳明细</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">养老保险</span>
              <span className="font-medium">¥{result.personalPayment.pension.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">医疗保险</span>
              <span className="font-medium">¥{result.personalPayment.medical.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">失业保险</span>
              <span className="font-medium">¥{result.personalPayment.unemployment.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">住房公积金</span>
              <span className="font-medium">¥{result.personalPayment.housingFund.toLocaleString()}</span>
            </div>
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">合计</span>
                <span className="font-bold text-lg text-orange-600">¥{result.personalPayment.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">单位缴纳明细</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">养老保险</span>
              <span className="font-medium">¥{result.companyPayment.pension.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">医疗保险</span>
              <span className="font-medium">¥{result.companyPayment.medical.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">失业保险</span>
              <span className="font-medium">¥{result.companyPayment.unemployment.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">工伤保险</span>
              <span className="font-medium">¥{result.companyPayment.injury.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">生育保险</span>
              <span className="font-medium">¥{result.companyPayment.maternity.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">住房公积金</span>
              <span className="font-medium">¥{result.companyPayment.housingFund.toLocaleString()}</span>
            </div>
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800">合计</span>
                <span className="font-bold text-lg text-green-600">¥{result.companyPayment.total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center text-gray-700">
          <span>您的税后工资估算</span>
          <span className="text-2xl font-bold text-blue-600">
            ¥{(result.baseSalary - result.personalPayment.total).toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-gray-500 mt-2">* 此结果仅供参考，实际工资以公司发放为准</p>
      </div>
    </div>
  );
}

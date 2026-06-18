export default function InfoSection() {
  const insuranceItems = [
    {
      title: '养老保险',
      icon: '💼',
      description: '累计缴纳满15年，达到法定退休年龄后可领取养老金，保障晚年生活。',
      personalRate: '8%',
      companyRate: '16%',
    },
    {
      title: '医疗保险',
      icon: '🏥',
      description: '用于支付门诊、住院等医疗费用，减轻就医负担。',
      personalRate: '2%',
      companyRate: '10%',
    },
    {
      title: '失业保险',
      icon: '📋',
      description: '失业后可领取一定期限的失业保险金，保障基本生活。',
      personalRate: '0.5%',
      companyRate: '0.5%',
    },
    {
      title: '工伤保险',
      icon: '🛡️',
      description: '工作期间发生意外伤害或职业病时可获得医疗救治和经济补偿。',
      personalRate: '0%',
      companyRate: '0.2%',
    },
    {
      title: '生育保险',
      icon: '👶',
      description: '女职工生育期间可享受产假和生育津贴，男职工可享受陪产假。',
      personalRate: '0%',
      companyRate: '1%',
    },
    {
      title: '住房公积金',
      icon: '🏠',
      description: '可用于购房、租房、装修等，享受低利率贷款优惠。',
      personalRate: '5%-12%',
      companyRate: '5%-12%',
    },
  ];

  const faqItems = [
    {
      question: '社保缴费基数是如何确定的？',
      answer: '社保缴费基数一般以上一年度本人工资收入为缴费基数。职工工资收入高于当地上年度职工平均工资300%的，以当地上年度职工平均工资的300%为缴费基数；低于当地上年度职工平均工资60%的，以当地上年度职工平均工资的60%为缴费基数。',
    },
    {
      question: '五险一金的缴纳比例是全国统一的吗？',
      answer: '不是。五险一金的缴纳比例由各地政府根据当地实际情况制定，不同城市的缴纳比例可能存在差异。',
    },
    {
      question: '个人需要缴纳工伤保险和生育保险吗？',
      answer: '不需要。工伤保险和生育保险完全由单位缴纳，个人无需缴纳。',
    },
    {
      question: '住房公积金可以提取吗？',
      answer: '可以。职工有下列情形之一的，可以提取住房公积金账户内的存储余额：购买、建造、翻建、大修自住住房的；离休、退休的；完全丧失劳动能力，并与单位终止劳动关系的；出境定居的等。',
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">社保构成说明</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insuranceItems.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-orange-600">个人: {item.personalRate}</span>
                  <span className="text-green-600">单位: {item.companyRate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">计算公式</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">个人社保缴纳 =</h3>
                <div className="space-y-2 text-gray-600">
                  <p>缴费基数 × 养老保险比例(8%)</p>
                  <p>+ 缴费基数 × 医疗保险比例(2%)</p>
                  <p>+ 缴费基数 × 失业保险比例(0.5%)</p>
                  <p>+ 缴费基数 × 住房公积金比例(5%-12%)</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">单位社保缴纳 =</h3>
                <div className="space-y-2 text-gray-600">
                  <p>缴费基数 × 养老保险比例(16%)</p>
                  <p>+ 缴费基数 × 医疗保险比例(10%)</p>
                  <p>+ 缴费基数 × 失业保险比例(0.5%)</p>
                  <p>+ 缴费基数 × 工伤保险比例(0.2%)</p>
                  <p>+ 缴费基数 × 生育保险比例(1%)</p>
                  <p>+ 缴费基数 × 住房公积金比例(5%-12%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">常见问题</h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

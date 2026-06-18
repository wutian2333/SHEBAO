export default function HeaderSection() {
  return (
    <div className="relative w-full h-72 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDE0di0yaDIyek0zNiAyNnYySDR2LTJoMzJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          社保计算器
        </h1>
        <p className="text-xl text-blue-100 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          轻松测算您的社保权益，规划未来生活
        </p>
        <div className="flex gap-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm">五险一金</span>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm">工资测算</span>
          <span className="px-4 py-2 bg-white/20 rounded-full text-sm">个税计算</span>
        </div>
      </div>
    </div>
  );
}

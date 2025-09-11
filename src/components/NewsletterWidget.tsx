interface NewsletterWidgetProps {
  className?: string;
}

const NewsletterWidget = ({ className = "" }: NewsletterWidgetProps) => {
  return (
    <div className={`sidebar-widget bg-gradient-to-br from-[#007fff]/10 to-[#007fff]/5 border-[#007fff]/30 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-[#007fff] flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs">📧</span>
        </div>
        <h3 className="text-lg font-bold text-[#007fff]">Breaking News Alerts</h3>
      </div>
      
      <p className="text-sm text-news-text mb-4 leading-relaxed">
        Get exclusive access to breakthrough beauty discoveries before they go viral!
      </p>
      
      <div className="space-y-3">
        <div className="klaviyo-form-TbbXfi"></div>
        
        {/* Fallback form if Klaviyo doesn't load */}
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-[#007fff]/30 rounded focus:outline-none focus:ring-2 focus:ring-[#007fff]/50 focus:border-[#007fff] text-sm"
          />
          <button className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-sm">
            Subscribe
          </button>
        </div>
      </div>
      
      <p className="text-xs text-news-muted mt-3 text-center">
        Join 50,000+ beauty insiders. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default NewsletterWidget;

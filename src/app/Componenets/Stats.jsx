import React from 'react';

export default function Stats() {
  const stats = [
    {
      id: 1,
      label: 'Active Job Seekers',
      value: '482,900+',
      change: '+12% this week',
      isPositive: true,
      description: 'Verified professionals looking for roles.',
      statusColor: 'bg-blue-500'
    },
    {
      id: 2,
      label: 'Verified Recruiters',
      value: '14,250',
      change: '+84 new today',
      isPositive: true,
      description: 'Firms actively hiring talent pipelines.',
      statusColor: 'bg-purple-500'
    },
    {
      id: 3,
      label: 'Average Time-to-Hire',
      value: '14 Days',
      change: '-4 days vs last year',
      isPositive: true, // Positive business outcome
      description: 'From initial application to signed offer letter.',
      statusColor: 'bg-emerald-500'
    },
    {
      id: 4,
      label: 'Total Total Payroll Processed',
      value: '$42.8M',
      change: 'Global remote metrics',
      isPositive: null,
      description: 'Secure international contractor payouts.',
      statusColor: 'bg-slate-400'
    }
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional Section Header */}
        <div className="mb-8">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            Real-Time Platform Activity
          </h2>
        </div>

        {/* Stats Grid Matrix */}
        <div className="grid grid-cols-1 gap-4 card shadow-2xs sm:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-2xl overflow-hidden divide-y divide-x-0 sm:divide-x sm:divide-y-0 lg:divide-y-0 divide-slate-200 bg-slate-50/50">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="p-6 bg-white flex flex-col justify-between hover:bg-slate-50/50 transition-colors duration-150"
            >
              <div>
                {/* Card Top Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-medium text-slate-500 tracking-tight truncate">
                    {stat.label}
                  </span>
                  <span className={`h-1.5 w-1.5 rounded-full ${stat.statusColor}`} />
                </div>

                {/* Big Number Display */}
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold tracking-tight text-slate-900">
                    {stat.value}
                  </span>
                </div>
              </div>

              {/* Dynamic Context Footer */}
              <div className="mt-4 pt-4 border-t border-slate-100/80">
                {stat.change && (
                  <div className="flex items-center gap-1.5 text-xs font-medium mb-1">
                    {stat.isPositive !== null && (
                      <span className={stat.isPositive ? 'text-emerald-600' : 'text-rose-600'}>
                        {stat.isPositive ? '↑' : '↓'}
                      </span>
                    )}
                    <span className={
                      stat.isPositive === true ? 'text-emerald-700' : 
                      stat.isPositive === false ? 'text-rose-700' : 'text-slate-500'
                    }>
                      {stat.change}
                    </span>
                  </div>
                )}
                <p className="text-xs text-slate-400 leading-normal">
                  {stat.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
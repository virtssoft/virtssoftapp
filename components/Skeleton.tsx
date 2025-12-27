
import React from 'react';

const Skeleton: React.FC<{ type: 'hero' | 'grid' | 'dashboard' }> = ({ type }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0a0a0a] overflow-hidden">
      <div className="animate-pulse space-y-12 p-10">
        {type === 'hero' && (
          <>
            <div className="w-full h-[60vh] bg-white/5 rounded-3xl" />
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="h-40 bg-white/5 rounded-2xl" />
              <div className="h-40 bg-white/5 rounded-2xl" />
              <div className="h-40 bg-white/5 rounded-2xl" />
            </div>
          </>
        )}
        {type === 'grid' && (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="space-y-4">
                <div className="aspect-square bg-white/5 rounded-2xl" />
                <div className="h-4 w-3/4 bg-white/5 rounded" />
                <div className="h-4 w-1/2 bg-white/5 rounded" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Central Loader */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-24 h-24 border-2 border-blue-500/30 rounded-full animate-[spin_3s_linear_infinite]" />
          <div className="absolute w-20 h-20 border-2 border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-[spin_1.5s_linear_infinite]" />
          <div className="text-xl font-light tracking-[0.2em] animate-pulse">VIRTS<span className="font-bold">SOFT</span></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;

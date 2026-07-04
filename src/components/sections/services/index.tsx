"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { ServiceItem } from "@/types/services";

// Self-contained icons map to avoid third-party library bloat
const ServiceIcon = ({ name }: { name: string }) => {
  const iconClasses = "w-8 h-8 text-emerald-400 transition-colors duration-300";

  switch (name) {
    case "Laptop":
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case "Smartphone":
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    case "Palette":
    default:
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122A3 3 0 0010.47 21h5.06a3 3 0 002.937-2.378l1.007-4.532a3 3 0 00-2.937-3.654H15l.39-2.338c.112-.67-.101-1.353-.578-1.83l-1.636-1.636a.75.75 0 00-1.22.428l-2.038 6.113a3 3 0 00-.407 1.543v1.54z" />
        </svg>
      );
  }
};

export default function ServicesSection() {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        // During mockup: fetches /data/services.json
        // During API integration: fetches backend baseURL + /services (if API endpoint matches)
        const response = await api.get<ServiceItem[]>("/data/services.json");
        setServices(response.data);
      } catch (err: any) {
        console.error("Failed to load services:", err);
        setError("Gagal memuat data layanan. Silakan coba beberapa saat lagi.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-[#071115] w-full flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-emerald-400/20 border-t-emerald-400 rounded-full animate-spin"></div>
          <p className="text-slate-400 font-medium">Memuat data layanan...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-[#071115] w-full flex items-center justify-center min-h-[400px]">
        <div className="text-center px-4">
          <p className="text-red-400 text-lg font-medium">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors font-medium"
          >
            Coba Lagi
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#071115] w-full" id="services">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-emerald-400 font-semibold uppercase tracking-wider text-sm mb-3">Layanan Kami</h2>
          <h3 className="text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Solusi Digital Terbaik Untuk Perkembangan Bisnis Anda
          </h3>
        </div>

        {/* LOOPING ELEMENT / MAPPING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-[#0d1e24] border border-slate-800 hover:border-emerald-500/30 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <ServiceIcon name={service.iconName} />
                  </div>
                </div>
                
                <h4 className="text-white text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors duration-300">
                  {service.title}
                </h4>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Looping nested list features */}
              <ul className="space-y-2 border-t border-slate-800/80 pt-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-300 text-sm">
                    <svg className="w-4 h-4 text-emerald-400 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

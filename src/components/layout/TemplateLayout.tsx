import { motion } from 'framer-motion';
import { BrandingConfig } from '../../config';

export default function TemplateLayout({ branding, modules, darkMode = false }: { branding: BrandingConfig; modules: string[]; darkMode?: boolean }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center text-primary mb-8">Welcome to {branding.businessName}</h1>
        <p className="text-center text-gray-600 mb-8">Professional website template</p>
        <div className="text-center">
          <p className="text-sm text-gray-500">This is a Vite-based template with the following modules:</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {modules.map(module => (
              <span key={module} className="px-3 py-1 bg-accent text-white rounded-full text-sm">
                {module}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { Suspense, useState } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher/LanguageSwitcher';
import ZodiacDetail from './components/ZodiacDetail/ZodiacDetail';
import ZodiacList from './components/ZodiacList/ZodiacList';

const App = () => {
  const [selectedZodiac, setSelectedZodiac] = useState(null);

  const handleSelect = (sign, icon) => {
    setSelectedZodiac({ sign, icon });
  };

  const handleBack = () => {
    setSelectedZodiac(null);
  };


  return (
    <div className="app">
      <LanguageSwitcher />
      <Suspense fallback={<div>Loading...</div>}>
        {selectedZodiac ? (
          <ZodiacDetail
            sign={selectedZodiac.sign}
            icon={selectedZodiac.icon}
            onBack={handleBack}
          />
        ) : (
          <ZodiacList onSelect={handleSelect} />
        )}
      </Suspense>

    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactSwitch from 'react-switch';

const LangSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState('fr');
  const [checked, setChecked] = useState(false)

  const handleChange = (val) => {
    setChecked(val);
    if (!checked) {
      setSelectedLang('en');
      i18n.changeLanguage('en');
    } else {
       setSelectedLang('fr');
      i18n.changeLanguage('fr');
    }
  }

  return (
    <div className="langselector">
    <ReactSwitch
        id="lang-switch"
        checked={checked}
        onChange={handleChange}
        borderRadius={4}
        offColor={"#2669a5"}
        onColor={"#2669a5"}
        offHandleColor={"#fcead4"}
        onHandleColor={"#fcead4"}
      />
      <div style={{ marginTop: 5 }} value="fr">Switch to <br/>{selectedLang === 'fr'? 'English' : 'French'}</div>
    </div>
  );
}

  export default LangSelector;

const { THEMES } = require("constants");
const { default: useLocalStorage } = require("hooks/useLocalStorage");
const { createContext } = require("react");

const initialSettings = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: (arg) => {},
});

const SettingsProvider = ({ children }) => {
  const { data: settings, storeData: setSettings } = useLocalStorage(
    "settings",
    initialSettings
  );

  const saveSettings = (updateSettings) => {
    setSettings(updateSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;

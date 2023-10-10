const { THEMES } = require("constants");
const { default: useLocalStorage } = require("hooks/useLocalStorage");
const { createContext } = require("react");

const initialSettings = {
  direction: "ltr",
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: (arg) => {},
});

const SettingsProvider = ({ children }) => {
  const { data, storeData } = useLocalStorage("settings", initialSettings);

  const saveSettings = (updateSettings) => {
    saveSettings(updateSettings);
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

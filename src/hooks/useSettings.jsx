const { SettingsContext } = require("contexts/SettingsContext");
const { useContext } = require("react");

const useSettings = () => useContext(SettingsContext);

export default useSettings;

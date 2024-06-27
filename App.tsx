import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/App.routes";
import { ThemeContext, ThemeProvider } from "./src/components/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
    </ThemeProvider>
  );
}

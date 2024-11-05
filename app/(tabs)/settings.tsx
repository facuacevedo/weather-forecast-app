import { SettingsComponent } from "@/components/SettingsComponent";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Settings() {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#020024", "#090979", "#00ffc4"]}
        start={{ x: 0.21, y: 0.57 }}
        end={{ x: 0.7, y: -0.1 }}
        style={{
          width: "100%",
          height: "100%",
          padding: 40,
        }}
      >
        <SettingsComponent />
      </LinearGradient>
    </SafeAreaView>
  );
}

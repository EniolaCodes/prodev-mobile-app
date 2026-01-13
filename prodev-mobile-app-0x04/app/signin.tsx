import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_join";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { FACEBOOKLOGO, GOOGLELOGO } from "@/constants";
import { useRouter } from "expo-router";
export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            ...styles.formGroup,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Ionicons
            name="arrow-back"
            size={25}
            onPress={() => router.push("/")}
          />
          <Image source={require("@/assets/images/logo-green.png")} />
        </View>
        <Text style={styles.titleText}>Sign in to your</Text>
        <Text style={styles.titleText}>Account</Text>
        <Text style={styles.subText}>
          Enter your email and password to sign in.
        </Text>
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.signupTitleText}>Email</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formControl}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.signupTitleText}>Password</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.formControl}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View style={styles.divider}></View>
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.divider}></View>
        </View>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.iconsection}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={GOOGLELOGO} />
              <Text style={styles.signupTitleText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconsection}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={FACEBOOKLOGO} />
              <Text style={styles.signupTitleText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={styles.subText}>Don&apos;t have an account?</Text>

          <Text
            style={styles.signupSubTitleText}
            onPress={() => router.push("/join")}
          >
            Join now
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

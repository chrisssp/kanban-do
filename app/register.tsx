import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import Svg, { Path } from "react-native-svg";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const WaveHeader = () => (
  <Svg
    height="60"
    width="100%"
    viewBox="0 0 1440 60"
    style={{ position: "absolute", bottom: -1, transform: [{ scaleX: -1 }] }}
    preserveAspectRatio="none"
  >
    <Path
      fill="#426CAA"
      d="M0,0L48,10C96,20,192,40,288,48C384,56,480,52,576,45.3C672,38,768,28,864,32C960,36,1056,52,1152,56C1248,60,1344,52,1392,48L1440,44L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
    />
  </Svg>
);

export default function Register() {
  return (
    <View className="flex-1 bg-primary">
      {/* Encabezado */}
      <View className="bg-white relative" style={{ paddingBottom: 40 }}>
        <View className="items-center pt-16 pb-12 px-4">
          <Text className="text-primary text-3xl font-bold">
            Únete a Kanban Do
          </Text>
          <Image
            className="mt-6"
            source={require("./../assets/images/logo-dark.png")}
            style={{ width: 120, height: 120 }}
            resizeMode="contain"
          />
        </View>
        <WaveHeader />
      </View>

      {/* Formulario */}
      <View className="flex-1 px-4 pt-8">
        {/* Campo Nombre de Usuario */}
        <View className="mb-4">
          <Text className="text-white text-base font-medium mb-2">
            Nombre de usuario
          </Text>
          <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3 bg-primary-dark">
            <MaterialIcons
              name="person"
              size={18}
              color="white"
              className="mr-2"
            />
            <TextInput
              placeholder="Crea tu nombre de usuario"
              placeholderTextColor="white"
              className="flex-1 text-white ml-2"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Campo Email */}
        <View className="mb-4">
          <Text className="text-white text-base font-medium mb-2">
            Correo electrónico
          </Text>
          <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3 bg-primary-dark">
            <MaterialIcons
              name="email"
              size={18}
              color="white"
              className="mr-2"
            />
            <TextInput
              placeholder="Introduce tu correo electrónico"
              placeholderTextColor="white"
              className="flex-1 text-white ml-2"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
        </View>

        {/* Campo Contraseña */}
        <View className="mb-6">
          <Text className="text-white text-base font-medium mb-2">
            Contraseña
          </Text>
          <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3 bg-primary-dark">
            <Feather name="lock" size={18} color="white" className="mr-2" />
            <TextInput
              placeholder="Crea tu contraseña"
              placeholderTextColor="white"
              secureTextEntry
              className="flex-1 text-white ml-2"
            />
          </View>
        </View>

        {/* Botón de Login */}
        <TouchableOpacity
          className="bg-white py-3 rounded-xl mb-4"
          activeOpacity={0.8}
        >
          <Text className="text-primary text-center font-semibold text-lg">
            Registrarse
          </Text>
        </TouchableOpacity>

        {/* Separador */}
        <View className="flex-row items-center justify-center mb-4">
          <View className="flex-1 h-px bg-gray-200" />
          <Text className="text-white mx-4">o</Text>
          <View className="flex-1 h-px bg-gray-200" />
        </View>

        {/* Enlace a inciar sesión */}
        <Text className="text-center text-white text-base">
          ¿Ya tienes cuenta?{" "}
          <Link href="/" className="font-semibold text-white">
            Iniciar sesión
          </Link>
        </Text>
      </View>
    </View>
  );
}

// components/ProjectForm.tsx
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
  
  type Props = {
    onClose: () => void;
  };
  
  export default function ProjectForm({ onClose }: Props) {
    return (
      <View className="bg-white w-full rounded-t-3xl">
        {/* Encabezado */}
        <View className="bg-primary flex-row items-center p-4">
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="arrow-back" size={20} color="white" />
          </TouchableOpacity>
          <Text className="text-lg text-white font-semibold ml-2">
            Nuevo proyecto
          </Text>
        </View>
  
        {/* Formulario */}
        <View className="p-4 gap-y-4">
          {/* Fila: Nombre + Emoji + Color */}
          <View className="flex-row items-center gap-x-2">
            {/* Input Nombre */}
            <TextInput
              placeholder="Nombre del proyecto"
              className="flex-1 border border-secondary/30 rounded-lg px-2 py-3"
              placeholderTextColor="#52677D"
            />
  
            {/* Botón Emoji */}
            <TouchableOpacity className="w-12 h-12 border border-secondary/30 rounded-lg items-center justify-center">
              <Text className="text-lg">🎯</Text>
            </TouchableOpacity>
  
            {/* Botón Color */}
            <TouchableOpacity className="w-12 h-12 border border-secondary/30 rounded-lg items-center justify-center">
              <View className="h-5 w-5 rounded-full bg-green-500" />
            </TouchableOpacity>
          </View>
  
          {/* Participantes */}
          <TouchableOpacity className="border border-secondary/30 rounded-lg px-2 py-3 flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="group" size={20} color="#52677D" />
              <Text className="text-secondary">Agrega participantes</Text>
            </View>
            <Entypo name="chevron-down" size={20} color="#52677D" />
          </TouchableOpacity>
  
          {/* Fecha de inicio */}
          <TouchableOpacity className="border border-secondary/30 rounded-lg px-2 py-3 flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="calendar-today" size={20} color="#52677D" />
              <Text className="text-secondary">Fecha de inicio</Text>
            </View>
            <Entypo name="chevron-down" size={20} color="#52677D" />
          </TouchableOpacity>
  
          {/* Fecha de fin */}
          <TouchableOpacity className="border border-secondary/30 rounded-lg px-2 py-3 flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="event" size={20} color="#52677D" />
              <Text className="text-secondary">Fecha de fin</Text>
            </View>
            <Entypo name="chevron-down" size={20} color="#52677D" />
          </TouchableOpacity>
  
          {/* Etiquetas */}
          <TouchableOpacity className="border border-secondary/30 rounded-lg px-2 py-3 flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Ionicons name="pricetags-outline" size={20} color="#52677D" />
              <Text className="text-secondary">Añade una etiqueta</Text>
            </View>
            <Entypo name="chevron-down" size={20} color="#52677D" />
          </TouchableOpacity>
  
          {/* Botón agregar */}
          <TouchableOpacity className="bg-primary rounded-lg py-3 mt-2">
            <Text className="text-white text-center font-semibold">Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
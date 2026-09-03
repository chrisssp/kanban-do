import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Project } from "@/models/project.model";

const tailwindColors = ["green", "blue", "red", "yellow", "purple"] as const;
type ColorType = (typeof tailwindColors)[number];
const colorMap: Record<ColorType, { background: string; text: string }> =
  Object.fromEntries(
    tailwindColors.map((color) => [
      color,
      {
        background: `bg-${color}-500`,
        text: `text-${color}-500`,
      },
    ])
  ) as Record<ColorType, { background: string; text: string }>;

export const ProjectCard = ({ project }: { project: Project }) => {
  // Fallback en caso de que el color no esté en el mapa
  const bgColor =
    colorMap[project.color as keyof typeof colorMap]?.background ??
    "bg-gray-500";
  const textColor =
    colorMap[project.color as keyof typeof colorMap]?.text ?? "text-gray-500";

  return (
    <View className="mb-4 border border-secondary/30 rounded-lg p-3">
      {/* Encabezado con título, botón de opciones y emoji */}
      <View className="flex-row items-center z justify-between mb-2">
        <View className="flex-row items-center flex-1">
          <Text className="text-xl font-semibold text-secondary mr-2">
            {project.name}
          </Text>
          <Text className="text-xl">{project.emoji}</Text>
        </View>

        {/* Botón de opciones */}
        <TouchableOpacity className="p-2">
          <Feather name="more-vertical" size={18} color="secondary" />
        </TouchableOpacity>
      </View>

      {/* Card del proyecto */}
      <TouchableOpacity
        className={`${bgColor} rounded-lg p-4`}
        activeOpacity={0.9}
      >
        {/* Responsables */}
        <View className="flex-row flex-wrap mb-2">
          {project.responsible.map((imgUrl, index) => (
            <View key={index} className="mr-2">
              <Image
                source={{ uri: imgUrl }}
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            </View>
          ))}
        </View>

        {/* Fecha */}
        <View className="flex-row items-center mb-2">
          {/* Fecha de inicio */}
          <View className="flex-row rounded-lg border border-white px-2 py-1 mr-2">
            <MaterialIcons
              name="timer"
              size={18}
              color="white"
              className="mr-2"
            />
            <Text className="text-white font-semibold text-sm">
              {project.startDate}
            </Text>
          </View>
          {/* Fecha de fin */}
          <View className="flex-row rounded-lg border border-white px-2 py-1 mr-2">
            <MaterialIcons
              name="timer-off"
              size={18}
              color="white"
              className="mr-2"
            />
            <Text className="text-white font-semibold text-sm">
              {project.endDate}
            </Text>
          </View>
        </View>

        {/* Etiquetas */}
        <View className="flex-row flex-wrap mb-2">
          {project.tags.map((tag, index) => (
            <View key={index} className="bg-white rounded-lg px-2 py-1 mr-2">
              <Text className={`${textColor} font-semibold text-sm`}>
                {tag}
              </Text>
            </View>
          ))}
        </View>

        {/* Progreso */}
        <View className="flex-row items-center justify-between">
          <View className="flex-1 bg-white/30 rounded-full h-2 mr-4">
            <View
              className="bg-white h-2 rounded-full"
              style={{ width: `${project.progress}%` }}
            />
          </View>
          <Text className="text-white font-bold text-sm">
            {project.progress}%
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

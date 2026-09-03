import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Task } from "@/models/task.model";

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

export const TaskCard = ({ task }: { task: Task }) => {
  const bgColor =
    colorMap[task.color as keyof typeof colorMap]?.background ?? "bg-gray-500";
  const textColor =
    colorMap[task.color as keyof typeof colorMap]?.text ?? "text-gray-500";

  return (
    <TouchableOpacity
      className={`${bgColor} rounded-lg p-3 mb-3`}
      activeOpacity={0.9}
    >
      {/* Título y emoji */}
      <View className="flex-row items-center mb-2">
        <Text className="text-base font-semibold text-white mr-2">
          {task.name}
        </Text>
        <View className="w-6 h-6 border border-white rounded-full items-center justify-center">
          <Text className="text-sm">{task.emoji}</Text>
        </View>
      </View>

      {/* Sección de responsables, fechas y tags */}
      <View className="flex-row flex-wrap items-center gap-x-2 gap-y-2">
        {/* Responsables */}
        {task.responsible.map((imgUrl, index) => (
          <Image
            key={index}
            source={{ uri: imgUrl }}
            className="w-6 h-6 rounded-full border-2 border-white"
          />
        ))}

        {/* Fecha inicio */}
        <View className="flex-row items-center rounded-lg border border-white px-2 py-1">
          <MaterialIcons name="timer" size={16} color="white" />
          <Text className="text-white font-semibold text-sm ml-1">
            {task.startDate}
          </Text>
        </View>

        {/* Fecha fin */}
        <View className="flex-row items-center rounded-lg border border-white px-2 py-1">
          <MaterialIcons name="timer-off" size={16} color="white" />
          <Text className="text-white font-semibold text-sm ml-1">
            {task.endDate}
          </Text>
        </View>

        {/* Etiquetas */}
        {task.tags.map((tag, index) => (
          <View key={index} className="bg-white rounded-lg px-2 py-1">
            <Text className={`${textColor} font-semibold text-sm`}>{tag}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

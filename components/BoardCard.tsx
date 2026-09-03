import { View, Text, TouchableOpacity, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TaskCard } from "./TaskCard";
import { Board } from "@/models/board.model";

export const BoardCard = ({ board }: { board: Board }) => {
  return (
    <View className="mb-4 border border-secondary/30 rounded-lg p-3">
      {/* Encabezado con título y botones */}
      <View className="flex-row items-center justify-between mb-2">
        <Text className="text-lg font-semibold text-secondary mr-2 flex-1">
          {board.name}
        </Text>

        {/* Botones de opciones */}
        <TouchableOpacity className="p-2">
          <Feather name="plus" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2">
          <Feather name="more-vertical" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity className="p-2">
          <Feather name="chevron-down" size={18} color="black" />
        </TouchableOpacity>
      </View>

      {/* Lista de tareas */}
      {board.tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </View>
  );
};

import { ProjectCard } from "@/components/ProjectCard";
import ProjectForm from "@/components/ProjectForm";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, ScrollView, TouchableOpacity, View } from "react-native";

export default function ProjectsScreen() {
  const [showForm, setShowForm] = useState(false);

  const exampleProjects = [
    {
      name: "Kanban Do",
      startDate: "22/03/2025",
      endDate: "12/08/2025",
      tags: ["Orden", "Desarrollo", "Gestión"],
      progress: 75,
      color: "green",
      emoji: "📊",
      responsible: [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
      ],
    },
    {
      name: "Task Tracker",
      startDate: "15/01/2025",
      endDate: "16/07/2025",
      tags: ["Productividad", "Organización"],
      progress: 50,
      color: "blue",
      emoji: "✅",
      responsible: [
        "https://randomuser.me/api/portraits/men/45.jpg",
        "https://randomuser.me/api/portraits/women/30.jpg",
      ],
    },
    {
      name: "Budget Planner",
      startDate: "10/02/2025",
      endDate: "09/03/2025",
      tags: ["Finanzas", "Planificación"],
      progress: 30,
      color: "red",
      emoji: "💰",
      responsible: [
        "https://randomuser.me/api/portraits/women/50.jpg",
        "https://randomuser.me/api/portraits/men/60.jpg",
      ],
    },
  ];

  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {exampleProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </ScrollView>

      {/* Modal que contiene el formulario */}
      <Modal visible={showForm} animationType="slide">
        <ProjectForm onClose={() => setShowForm(false)} />
      </Modal>

      {/* Botón flotante */}
      <TouchableOpacity
        className="absolute h-12 w-12 items-center justify-center bottom-6 right-6 bg-primary rounded-full p-3"
        activeOpacity={0.8}
        onPress={() => setShowForm(true)}
      >
        <MaterialIcons name="add" size={22} color="white" />
      </TouchableOpacity>
    </View>
  );
}

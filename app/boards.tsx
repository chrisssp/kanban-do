import { BoardCard } from "@/components/BoardCard";
import { ScrollView, View } from "react-native";

export default function BoardsScreen() {
  const exampleBoards = [
    {
      name: "En progreso",
      tasks: [
        {
          name: "Diseñar landing",
          startDate: "10/04/2025",
          endDate: "12/04/2025",
          tags: ["UI", "UX"],
          color: "blue",
          emoji: "🎨",
          responsible: [
            "https://randomuser.me/api/portraits/men/22.jpg",
            "https://randomuser.me/api/portraits/women/44.jpg",
          ],
        },
        {
          name: "API de autenticación",
          startDate: "09/04/2025",
          endDate: "11/04/2025",
          tags: ["Backend", "Seguridad"],
          color: "red",
          emoji: "🔐",
          responsible: ["https://randomuser.me/api/portraits/men/50.jpg"],
        },
      ],
    },
    {
      name: "Finalizado",
      tasks: [
        {
          name: "Escribir documentación",
          startDate: "05/04/2025",
          endDate: "06/04/2025",
          tags: ["Documentación", "Escritura"],
          color: "green",
          emoji: "📄",
          responsible: [
            "https://randomuser.me/api/portraits/women/30.jpg",
            "https://randomuser.me/api/portraits/men/40.jpg",
          ],
        },
        {
          name: "Pruebas unitarias",
          startDate: "07/04/2025",
          endDate: "08/04/2025",
          tags: ["Testing", "QA"],
          color: "purple",
          emoji: "✅",
          responsible: ["https://randomuser.me/api/portraits/men/60.jpg"],
        },
      ],
    },
    {
      name: "Pendiente",
      tasks: [
        {
          name: "Configurar CI/CD",
          startDate: "13/04/2025",
          endDate: "15/04/2025",
          tags: ["DevOps", "Automatización"],
          color: "blue",
          emoji: "⚙️",
          responsible: [
            "https://randomuser.me/api/portraits/women/25.jpg",
            "https://randomuser.me/api/portraits/men/35.jpg",
          ],
        },
        {
          name: "Revisión de código",
          startDate: "16/04/2025",
          endDate: "17/04/2025",
          tags: ["Colaboración", "Código"],
          color: "yellow",
          emoji: "🔍",
          responsible: ["https://randomuser.me/api/portraits/women/55.jpg"],
        },
      ],
    },
  ];

  return (
    <ScrollView>
      <View className="flex-1 bg-white p-4">
        {exampleBoards.map((board, index) => (
          <BoardCard key={index} board={board} />
        ))}
      </View>
    </ScrollView>
  );
}

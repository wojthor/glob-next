export type Trip = {
  id: number;
  name: string;
  date: string;
  price: number;
  image: string;
};

const trips: Trip[] = [
  {
    id: 1,
    name: "Wycieczka po Paryżu",
    date: "2024-07-15",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1694286433612-cdc3d0c58608?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Wyprawa w Góry Andes",
    date: "2024-08-03",
    price: 3500,
    image:
      "https://thumbs.dreamstime.com/b/andes-góry-w-krajowym-naturalnego-parka-śniegu-kolumbia-88904099.jpg",
  },
  {
    id: 3,
    name: "Wakacje na Wyspach Greckich",
    date: "2024-09-20",
    price: 2800,
    image: "https://carter.eu/wp-content/uploads/2024/02/Zakynthos-glowne.jpg",
  },
  {
    id: 4,
    name: "Safari w Serengeti",
    date: "2024-11-10",
    price: 4500,
    image:
      "https://images.r.pl/zdjecia/lokalizacje/823/park-narodowy-serengeti_823_90487_122671_1000x1000.jpg",
  },
  {
    id: 5,
    name: "Zwiedzanie Machu Picchu",
    date: "2024-12-05",
    price: 2400,
    image:
      "https://galeria.bankier.pl/p/c/e/40d7f3ab5ced6f-1200-720-2-67-995-597.jpg",
  },
  {
    id: 6,
    name: "Kanion Antylopy",
    date: "2025-01-20",
    price: 1800,
    image:
      "https://f4fcdn.eu/wp-content/uploads/2019/12/shutterstock_1065081017.jpg",
  },
  {
    id: 7,
    name: "Wycieczka po Japonii",
    date: "2025-03-08",
    price: 3200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiTq6UVrDkA40xG5jFjSF-z7j70yo5eaGz6fmXkZcCQ&s",
  },
  {
    id: 8,
    name: "Rajd po Pustyni Sahara",
    date: "2025-04-25",
    price: 4100,
    image:
      "https://geosfera.info/wp-content/uploads/2023/06/Sahara-Desert.webp",
  },
];

export default trips;

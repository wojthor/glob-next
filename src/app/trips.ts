export type Trip = {
  id: number;
  name: string;
  date: string;
  price: number;
  image: string;
  description: string;
  services: string[];
};

const trips: Trip[] = [
  {
    id: 1,
    name: "Wycieczka po Paryżu",
    date: "2024-07-15",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3",
    description:
      "Odkryj najpiękniejsze zakątki Paryża, od wieży Eiffla po Luwr. Zobacz Montmartre i zasmakuj w prawdziwym francuskim croissancie.",
    services: [
      "Przelot w obie strony",
      "Zakwaterowanie w hotelu 3* ze śniadaniem",
      "Bilet wstępu do Luwru",
      "Wycieczka z przewodnikiem po Montmartre",
      "Transfery lotniskowe",
    ],
  },
  {
    id: 2,
    name: "Wyprawa w Góry Andes",
    date: "03.10 - 10.10.2024",
    price: 3500,
    image:
      "https://images.unsplash.com/photo-1592519755457-1082165effb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5kZXN8ZW58MHwwfDB8fHwy",
    description:
      "Przeżyj przygodę w majestatycznych Andach. Wędrówki po górach, spotkania z lokalną kulturą i zapierające dech w piersiach widoki.",
    services: [
      "Przelot w obie strony",
      "Zakwaterowanie w schroniskach górskich",
      "Codzienne śniadania i kolacje",
      "Wypożyczenie sprzętu trekkingowego",
      "Profesjonalny przewodnik górski",
    ],
  },
  {
    id: 3,
    name: "Wakacje na Wyspach Greckich",
    date: "2024-09-20",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlfGVufDB8MHwwfHx8Mg%3D%3D",
    description:
      "Relaks na pięknych plażach greckich wysp. Odkryj urokliwe wioski, spróbuj lokalnych potraw i ciesz się słońcem przez cały dzień.",
    services: [
      "Przelot w obie strony",
      "Zakwaterowanie w hotelu 4* all-inclusive",
      "Transfery lotniskowe",
      "Rejs statkiem po okolicznych wyspach",
      "Wycieczka po lokalnych wioskach z przewodnikiem",
    ],
  },
  {
    id: 4,
    name: "Safari w Serengeti",
    date: "2024-11-10",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1580687774199-51c183723dd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VyZW5nZXRpfGVufDB8MHwwfHx8Mg%3D%3D",
    description:
      "Doświadcz dzikiej przyrody podczas safari w Serengeti. Zobacz Wielką Migrację, lwy, słonie i wiele innych afrykańskich zwierząt.",
    services: [
      "Przelot w obie strony",
      "Zakwaterowanie w luksusowych namiotach",
      "Codzienne safari z przewodnikiem",
      "Wyżywienie: pełne wyżywienie (śniadania, obiady, kolacje)",
      "Transfery lotniskowe",
    ],
  },
  {
    id: 5,
    name: "Zwiedzanie Machu Picchu",
    date: "2024-12-05",
    price: 2400,
    image:
      "https://images.unsplash.com/photo-1587595742138-7975cf837028?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFjaHUlMjBwaWNjaHV8ZW58MHwwfDB8fHwy",
    description:
      "Odwiedź tajemnicze ruiny Machu Picchu. Zobacz starożytne miasto Inków i podziwiaj spektakularne widoki na okoliczne góry.",
    services: [
      "Przelot w obie strony",
      "Zakwaterowanie w lokalnych hotelach",
      "Bilety wstępu do Machu Picchu",
      "Transfery na trasie wycieczki",
      "Przewodnik historyczny podczas zwiedzania",
    ],
  },
  {
    id: 6,
    name: "Kanion Antylopy",
    date: "2025-01-20",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1700069536927-21049d7140c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FuaW9ufGVufDB8MHwwfHx8Mg%3D%3D",
    description:
      "Podziwiaj piękno Kanionu Antylopy. Zanurz się w magicznej grze świateł i cieni w jednym z najpiękniejszych miejsc Arizony.",
    services: [
      "Przelot w obie strony",
      "Zakwaterowanie w hotelu 3* w pobliżu kanionu",
      "Bilet wstępu do Kanionu Antylopy",
      "Transfery z hotelu do kanionu",
      "Zwiedzanie z lokalnym przewodnikiem",
    ],
  },
  {
    id: 7,
    name: "Wycieczka po Japonii",
    date: "2025-03-08",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1700069536927-21049d7140c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FuaW9ufGVufDB8MHwwfHx8Mg%3D%3D",
    description:
      "Wycieczka po Japonii: Dzień 1: Wylot do Tokio - Rozpoczynamy naszą przygodę od zbiórki na lotnisku w Warszawie. Odprawa bagażowa i wylot do Tokio z międzylądowaniem w Dubaju. Podczas lotu będzie czas na relaks i przygotowanie się do niesamowitej przygody w Kraju Kwitnącej Wiśni.",
    services: [
      "Przelot w obie strony",
      "Zakwaterowanie w hotelach 4*",
      "Codzienne śniadania",
      "Bilety wstępu do atrakcji turystycznych",
      "Przejazdy superszybkim pociągiem Shinkansen",
      "Przewodnik mówiący po polsku",
    ],
  },
  {
    id: 8,
    name: "Rajd po Pustyni Sahara",
    date: "2025-04-25",
    price: 4100,
    image:
      "https://images.unsplash.com/photo-1545167496-31b3aa75296c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FoYXJhfGVufDB8fDB8fHwy",
    description:
      "Przeżyj niezapomniany rajd po Saharze. Podróż przez wydmy, noclegi pod gwiazdami i spotkania z nomadami to niezapomniane wrażenia.",
    services: [
      "Przelot w obie strony",
      "Zakwaterowanie w obozach na pustyni",
      "Codzienne wyżywienie (śniadania, obiady, kolacje)",
      "Przejażdżki na wielbłądach",
      "Spotkania z lokalnymi nomadami",
    ],
  },
];

export default trips;

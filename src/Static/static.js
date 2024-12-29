import diet from "../images/doctor-2.jpg";
import yoga from "../images/yoga.jpg";
import nutrition from "../images/nutrition.jpg";

export const services = [
  {
    id: 1,
    title: "Diet",
    description:
      "A diet is the combination of foods that a person or group of people typically eat.",
    image: diet,
  },
  {
    id: 2,
    title: "Nutrition",
    description:
      "Nutrition is the process of consuming, breaking down, and using food and other nutrients to grow, develop, and maintain life.",
    image: nutrition,
  },
  {
    id: 3,
    title: "Yoga",
    description:
      "Yoga is an ancient practice that combines physical postures, breathing exercises, and meditation to improve health and well-being",
    image: yoga,
  },
];

export const servicesDetails = [
  {
    id: 1,
    title: "Diet",
    description:
      "A diet refers to the types and amounts of food consumed by an individual or group, playing a crucial role in maintaining health, managing weight, and preventing diseases. Diets can vary significantly based on cultural, regional, and personal preferences. A balanced diet typically includes a variety of nutrients such as carbohydrates, proteins, fats, vitamins, and minerals to ensure proper body function. Adopting the right diet can lead to improved energy levels, better mental clarity, and enhanced overall well-being. Specialized diets may also target specific goals, such as weight loss, muscle gain, or managing health conditions like diabetes or heart disease.",
    subtitles: [
      {
        title: "Types of Diets",
        content: [
          "Balanced Diet – Includes all essential nutrients in appropriate proportions.",
          "Vegetarian Diet – Excludes meat, focusing on plant-based foods.",
          "Vegan Diet – Excludes all animal products.",
          "Ketogenic Diet – High in fats, low in carbohydrates.",
          "Mediterranean Diet – Rich in vegetables, fruits, whole grains, and healthy fats.",
        ],
      },
      {
        title: "Benefits of a Healthy Diet",
        content: [
          "Boosts immunity and energy levels.",
          "Reduces the risk of chronic diseases.",
          "Supports mental health and cognitive function.",
          "Aids in weight management.",
        ],
      },
      {
        title: "Tips for Maintaining a Healthy Diet",
        content: [
          "Plan meals ahead of time.",
          "Control portion sizes.",
          "Stay hydrated.",
          "Limit processed foods and sugars.",
        ],
      },
    ],
    image: diet,
  },
];

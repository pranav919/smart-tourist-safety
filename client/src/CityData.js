// src/CityData.js
const CityData = {
  Varanasi: [
    {
      name: "Kashi Vishwanath Temple 🛕",
      bestTime: "6 AM - 9 AM",
      crowd: "High during noon",
      tip: "Avoid Mondays due to heavy rush",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Kashi_Vishwanath_Temple_2.jpg"
    },
    {
      name: "Dashashwamedh Ghat 🌅",
      bestTime: "5 PM - 8 PM",
      crowd: "Crowded during Ganga Aarti",
      tip: "Reach early for best view of Aarti",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Dashashwamedh_Ghat%2C_Varanasi.jpg"
    },
    {
      name: "Banaras Hindu University 🎓",
      bestTime: "10 AM - 5 PM",
      crowd: "Moderate",
      tip: "Visit Bharat Kala Bhavan inside campus",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Banaras_Hindu_University_Temple.jpg"
    },
  ],

  Delhi: [
    {
      name: "India Gate 🇮🇳",
      bestTime: "5 AM - 9 AM",
      crowd: "Busy in evenings",
      tip: "Visit early morning for peaceful vibes",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/10/India_Gate_in_New_Delhi_03-2016_img3.jpg"
    },
    {
      name: "Red Fort 🏰",
      bestTime: "9 AM - 12 PM",
      crowd: "High on weekends",
      tip: "Closed on Mondays",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Lal_Qila_%28Red_Fort%29.JPG"
    },
    {
      name: "Qutub Minar 🕌",
      bestTime: "8 AM - 11 AM",
      crowd: "Moderate",
      tip: "Sunrise photos look stunning",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Qutub_Minar_New_Delhi.jpg"
    },
  ],

  Jaipur: [
    {
      name: "Hawa Mahal 🏯",
      bestTime: "8 AM - 10 AM",
      crowd: "Moderate",
      tip: "Morning light is best for photos",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Hawa_Mahal_2011.jpg"
    },
    {
      name: "Amber Fort 🏰",
      bestTime: "9 AM - 12 PM",
      crowd: "Busy in late morning",
      tip: "Try the elephant ride early",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Amber_Fort_jaipur.jpg"
    },
    {
      name: "Jal Mahal 🌊",
      bestTime: "6 PM - 8 PM",
      crowd: "Light",
      tip: "Perfect for evening photography",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Jal_Mahal_Jaipur_2011.jpg"
    },
  ],

  Mumbai: [
    {
      name: "Gateway of India ⛩️",
      bestTime: "6 AM - 9 AM",
      crowd: "Busy in evenings",
      tip: "Take ferry rides for scenic views",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Gateway_of_India_Mumbai.jpg"
    },
    {
      name: "Marine Drive 🌊",
      bestTime: "6 PM - 9 PM",
      crowd: "Moderate",
      tip: "Perfect for sunset walks",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Marine_Drive_Mumbai.jpg"
    },
    {
      name: "Siddhivinayak Temple 🙏",
      bestTime: "5 AM - 8 AM",
      crowd: "High on Tuesdays",
      tip: "Avoid peak hours on Tuesdays",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Siddhivinayak_Temple%2C_Mumbai.jpg"
    },
  ],

  Goa: [
    {
      name: "Baga Beach 🏖️",
      bestTime: "4 PM - 9 PM",
      crowd: "Crowded on weekends",
      tip: "Perfect for nightlife and water sports",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Baga_Beach_Goa.jpg"
    },
    {
      name: "Basilica of Bom Jesus ⛪",
      bestTime: "9 AM - 5 PM",
      crowd: "Light",
      tip: "UNESCO heritage site, worth exploring",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Basilica_of_Bom_Jesus_Goa.jpg"
    },
    {
      name: "Aguada Fort 🏰",
      bestTime: "5 PM - 7 PM",
      crowd: "Moderate",
      tip: "Sunset view is mesmerizing",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Fort_Aguada_Goa.jpg"
    },
  ],

  Agra: [
    {
      name: "Taj Mahal 🕌",
      bestTime: "6 AM - 9 AM",
      crowd: "High after 10 AM",
      tip: "Visit at sunrise for fewer crowds",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg"
    },
    {
      name: "Agra Fort 🏰",
      bestTime: "9 AM - 12 PM",
      crowd: "Moderate",
      tip: "Offers a view of Taj Mahal from inside",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Agra_Fort_2.jpg"
    },
    {
      name: "Mehtab Bagh 🌿",
      bestTime: "5 PM - 7 PM",
      crowd: "Light",
      tip: "Great for sunset Taj view across Yamuna",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Mehtab_Bagh_Agra.jpg"
    },
  ],

  Ayodhya: [
    {
      name: "Ram Mandir 🛕",
      bestTime: "6 AM - 10 AM",
      crowd: "High throughout day",
      tip: "Avoid weekends, visit early morning",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Ram_Mandir_Ayodhya.jpg"
    },
    {
      name: "Saryu Ghat 🌅",
      bestTime: "5 PM - 7 PM",
      crowd: "Moderate",
      tip: "Attend evening Aarti by the river",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Saryu_Ghat_Ayodhya.jpg"
    },
    {
      name: "Hanuman Garhi 🙏",
      bestTime: "8 AM - 11 AM",
      crowd: "Light",
      tip: "Offers a panoramic city view",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/25/Hanuman_Garhi_Ayodhya.jpg"
    },
  ]
};

export default CityData;

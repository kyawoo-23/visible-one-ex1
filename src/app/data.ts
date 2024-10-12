type TArticle = {
  title: string;
  content: string;
  publishedAt: string;
  isTrending: boolean;
  image: string;
  category: "technology" | "lifestyle" | "sports" | "travel";
};

export const articleData: TArticle[] = [
  {
    title: "The Future of AI in Everyday Life",
    content:
      "AI is transforming daily tasks, from smart homes to personal assistants.",
    publishedAt: "2024-10-10",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "technology",
  },
  {
    title: "5 Yoga Poses to Relieve Stress",
    content:
      "These simple yoga poses can help calm your mind and ease tension.",
    publishedAt: "2024-10-05",
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "lifestyle",
  },
  {
    title: "The Rise of Electric Vehicles",
    content:
      "Electric vehicles are rapidly gaining popularity with new models from major automakers.",
    publishedAt: "2024-09-22",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1709884735017-114f4a31f944?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "technology",
  },
  {
    title: "Top 10 Travel Destinations for 2025",
    content:
      "Explore the most exciting and beautiful destinations to visit next year.",
    publishedAt: "2024-10-11",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1709884732297-4b3c1a3f725b?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
  },
  {
    title: "The Benefits of a Plant-Based Diet",
    content:
      "Switching to a plant-based diet can improve health and reduce your carbon footprint.",
    publishedAt: "2024-09-30",
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "lifestyle",
  },
  {
    title: "The Impact of 5G on Global Communication",
    content: "5G technology is revolutionizing how we connect with the world.",
    publishedAt: "2024-10-01",
    isTrending: true,
    image:
      "https://plus.unsplash.com/premium_photo-1666432045848-3fdbb2c74531?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "technology",
  },
  {
    title: "How to Start Running: A Beginner’s Guide",
    content:
      "Learn the best practices for starting a running routine and staying injury-free.",
    publishedAt: "2024-09-28",
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1611697522020-f44d4e818698?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "sports",
  },
  {
    title: "The New Smartwatch Revolution",
    content:
      "Smartwatches are becoming essential tools for health tracking and connectivity.",
    publishedAt: "2024-10-09",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1713520074829-2e862fa8f8ac?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "technology",
  },
  {
    title: "How Social Media Influences Travel Choices",
    content:
      "Social platforms like Instagram are shaping the way people choose travel destinations.",
    publishedAt: "2024-09-25",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1576511294595-d1731bea8fbf?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
  },
  {
    title: "The Benefits of Daily Meditation",
    content:
      "Meditation can help reduce stress and improve overall mental health.",
    publishedAt: "2024-10-07",
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1646385890665-09e99c472d3d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "lifestyle",
  },
  {
    title: "The Evolution of Wearable Technology",
    content:
      "Wearable tech is evolving rapidly, providing new ways to track fitness and health.",
    publishedAt: "2024-10-02",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1652026921593-e92f05d46cce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "technology",
  },
  {
    title: "Cycling for Fitness: Tips for Beginners",
    content:
      "Cycling is a low-impact exercise that's great for cardiovascular health.",
    publishedAt: "2024-09-20",
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1705923483839-8fa182259298?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "sports",
  },
  {
    title: "Sustainable Travel: Eco-Friendly Destinations",
    content:
      "These destinations are leading the way in sustainability and responsible tourism.",
    publishedAt: "2024-10-06",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1705922676336-b7dbeb72b686?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
  },
  {
    title: "Mindfulness in the Workplace",
    content:
      "Incorporating mindfulness practices into your workday can improve focus and reduce stress.",
    publishedAt: "2024-09-29",
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1570009715643-526ef3e029a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "lifestyle",
  },
  {
    title: "The Future of Augmented Reality",
    content:
      "AR is set to change the way we interact with both the digital and physical world.",
    publishedAt: "2024-10-03",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1690292620204-fe22c3c00a68?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "technology",
  },
  {
    title: "Best Hiking Trails Around the World",
    content:
      "Discover some of the most breathtaking hiking trails across different continents.",
    publishedAt: "2024-09-21",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1675958428291-ac8588eb1934?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
  },
  {
    title: "The Rise of Women in Sports",
    content:
      "Women athletes are making history across various sports, breaking records and barriers.",
    publishedAt: "2024-09-26",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1694384973149-df0bc5cc4aa6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "sports",
  },
  {
    title: "Exploring the World of Smart Homes",
    content:
      "Smart home technology is making life easier and more energy-efficient.",
    publishedAt: "2024-10-04",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1707757292422-ed46f63703e4?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "technology",
  },
  {
    title: "How to Pack Light for Long-Term Travel",
    content:
      "Packing light can make your travels more enjoyable and stress-free.",
    publishedAt: "2024-09-19",
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1710166150284-1c1f77edd00f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "travel",
  },
  {
    title: "The Power of Habit: Small Changes for a Healthier Life",
    content:
      "Building small, consistent habits can lead to significant improvements in health and wellness.",
    publishedAt: "2024-09-23",
    isTrending: false,
    image:
      "https://images.unsplash.com/photo-1689764617068-da0fda4a954e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "lifestyle",
  },
  {
    title: "Top Sports Gear for the Winter Season",
    content:
      "Stay warm and comfortable while enjoying your favorite winter sports with the latest gear.",
    publishedAt: "2024-10-08",
    isTrending: true,
    image:
      "https://images.unsplash.com/photo-1650972443061-a8bea71bc327?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "sports",
  },
];

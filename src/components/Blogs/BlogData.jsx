import Blog1 from "./BlogsContent/Blog1";

const blogData = [
  {
    id: 1,
    image: "https://placehold.co/600x400",
    title: "Blog Title 1",
    description: "Description of Blog 1",
    author: {
      name: "Author 1",
      position: "Position 1",
      profileImage: "https://placehold.co/100x100",
    },
    date: "November 1, 2023",
    content: <Blog1 />,
  },
  {
    id: 2,
    image: "https://placehold.co/600x400",
    title: "Blog Title 2",
    description: "Description of Blog 2",
    author: {
      name: "Author 2",
      position: "Position 2",
      profileImage: "https://placehold.co/100x100",
    },
    date: "November 1, 2023",
    content: "Content of Blog 1...",
  },
  {
    id: 3,
    image: "https://placehold.co/600x400",
    title: "Blog Title 3",
    description: "Description of Blog 3",
    author: {
      name: "Author 3",
      position: "Position 3",
      profileImage: "https://placehold.co/100x100",
    },
    date: "November 1, 2023",
    content: "Content of Blog 1...",
  },
  {
    id: 4,
    image: "https://placehold.co/600x400",
    title: "Blog Title 4",
    description: "Description of Blog 4",
    author: {
      name: "Author 4",
      position: "Position 4",
      profileImage: "https://placehold.co/100x100",
    },
    date: "November 1, 2023",
    content: "Content of Blog 1...",
  },
];

export default blogData;

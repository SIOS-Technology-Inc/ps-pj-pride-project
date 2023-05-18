export type BlogType = {
  id: string;
  content: string;
  title: string;
  category: CategoryType[];
  image: ImageType;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
export type CategoryType = {
  id: string;
  color: string[];
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
export type ImageType = {
  url: string;
};

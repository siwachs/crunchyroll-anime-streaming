export type BannerItem = {
  id: string;
  title: string;
  banner: { name: string; tall: string; wide: string };
  metaTags: string[];
  genres: string[];
  description: string;
  totalSeasons: number;
  episodeId: string;
  episodeTitle: string;
};

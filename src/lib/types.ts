export interface Painting {
  id: string;
  title: string;
  titleZh: string;
  year: number;
  medium: string;
  dimensions: string;
  imageUrl: string;
  thumbnailUrl: string;
  description: string;
  interpretation: Interpretation;
  albumIds: string[];
  tags: string[];
}

export interface Interpretation {
  summary: string;
  theme: string;
  technique: string;
  emotion: string;
  extended: string;
}

export interface Album {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  coverPaintingId: string;
  paintingIds: string[];
  year: string;
}

export interface ArtistInfo {
  name: string;
  nameZh: string;
  bio: string;
  bioZh: string;
  statement: string;
  statementZh: string;
  avatarUrl: string;
}

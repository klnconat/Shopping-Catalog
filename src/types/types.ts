export interface ITagItem {
  IconUrl: string;
  Id: number;
  Name: string;
  Rank: number;
}

export interface IPromotionItem {
  BrandIconUrl: string;
  Id: number;
  ImageUrl: string;
  RemainingText: string,
  Title: string;
}

export type RootStackParamList = {
  DetailPage: { id: number }
};

export interface IPromotionItemDetail {
  BrandIconUrl: string;
  ImageUrl: string;
  Id: number;
  RemainingText: string,
  Title: string;
  PromotionDetailItemAreas: any
}


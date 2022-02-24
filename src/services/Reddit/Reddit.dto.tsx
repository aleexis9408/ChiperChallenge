export interface IReddit {
  kind: string;
  data: {
    after: string;
    before: string;
    modhash: string;
    geo_filter: string;
    dist: number;
    children: Ithing[];
  };
}

export interface Ithing {
  kind: string;
  data: Idata[];
}

export interface Idata {
  thumbnail: string;
  created_utc: number;
  title: string;
  score: number;
  num_comments: number;
  author_fullname: string;
  [key: string]: any;
}

export interface IGetPostParams {
  category: 'top' | 'new' | 'hot' | 'controversial';
}

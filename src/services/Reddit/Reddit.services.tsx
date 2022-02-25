import apiService from '../../common/axios.instance';
import useSWR from 'swr';
import {IGetPostParams, IReddit} from './Reddit.dto';

export class RedditServices {
  static getRedditData = (category: IGetPostParams) => {
    return new Promise<IReddit>((resolve, reject) => {
      apiService.get(`r/pics/${category}.json`).subscribe({
        next: result => resolve(result),
        error: err => {
          reject(err);
        },
      });
    });
  };

  static useRedditData = (category = 'new') => {
    const {data, error} = useSWR(`r/pics/${category}.json`);
    return {
      response: data,
      isLoading: !error && !data,
      isError: error,
    };
  };
}

import apiService from '../../common/axios.instance';
import {fetcher} from '../../common/swr.instance';
import useSWR from 'swr';
import {IReddit} from './Reddit.dto';

export class RedditServices {
  static getRedditData = (category = 'new') => {
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
    const {data, error} = useSWR(`r/pics/${category}.json`, fetcher);

    return {
      response: data,
      isLoading: !error && !data,
      isError: error,
    };
  };
}

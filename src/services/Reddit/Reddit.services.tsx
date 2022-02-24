import apiService from '../../common/axios.instance';
import {IGetPostParams, IReddit} from './Reddit.dto';

export class RedditServices {
  static getRedditData = ({category = 'new'}: IGetPostParams) => {
    return new Promise<IReddit>((resolve, reject) => {
      apiService.get(`r/pics/${category}.json?`).subscribe({
        next: result => resolve(result),
        error: err => {
          reject(err);
        },
      });
    });
  };
}

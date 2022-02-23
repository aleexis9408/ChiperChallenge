import apiService from '../../common/axios.instance';

export class RedditServices {
  static getRedditData = (category = 'new') => {
    return new Promise<any>((resolve, reject) => {
      apiService.get(`r/pics/${category}.json?`).subscribe({
        next: result => resolve(result),
        error: err => {
          reject(err);
        },
      });
    });
  };
}

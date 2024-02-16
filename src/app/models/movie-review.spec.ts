import { MovieReview } from './movie-review';

describe('MovieReview', () => {
  it('should create an instance', () => {
    const movieReview = new MovieReview(
      1,
      'Test text body', 
      5, 
      'Test movie title', 
      'http://example.com/image.jpg' 
    );
    expect(movieReview).toBeTruthy();
  });
});

import MeetupList from '../components/meetups/MeetupList';

const fake_data = [
  {
    image:
      'https://media.gettyimages.com/id/1405644706/photo/an-arms-in-the-air-happy-moment-for-a-family-of-5-messing-around-on-the-beach.jpg?s=2048x2048&w=gi&k=20&c=EBFeVe5fThu86iCcWOxxSWJ4SCQn22tR5sgv_8CWDRo=',
    first_name: 'Arel',
    last_name: 'Bedrosian',
    email: 'abedrosian0@pagesperso-orange.fr',
  },
  {
    image:
      'https://media.gettyimages.com/id/1389405195/photo/qingming-festival-holiday-in-china.jpg?s=2048x2048&w=gi&k=20&c=TcR9Qawt4LsCWc6iMaEZfRvBB2Qe4TS8zcemooKn96c=',
    first_name: 'Moll',
    last_name: 'Larkins',
    email: 'mlarkins1@furl.net',
  },
  {
    image:
      'https://media.gettyimages.com/id/1239953350/photo/regional-economy-as-u-k-inflation-jumps-to-30-year-high.jpg?s=2048x2048&w=gi&k=20&c=9Zt8Ysiuue1YDRriF8VLrakZ6wmseCWzHsUEfS1mceA=',
    first_name: 'Alistair',
    last_name: 'Cersey',
    email: 'acersey2@tumblr.com',
  },
  {
    image:
      'https://media.gettyimages.com/id/1140440176/photo/young-girl-in-meadow-blowing-dandelion-flower-in-late-summer-norfolk.jpg?s=2048x2048&w=gi&k=20&c=siWK5PWHZSkKR1XjVOHRpu34zTg2xp5FBdamnBVetY4=',
    first_name: 'Court',
    last_name: 'Petroselli',
    email: 'cpetroselli3@sohu.com',
  },
  {
    image:
      'https://www.shutterstock.com/image-photo/beautiful-scenic-landscape-mountain-fuji-600w-1450515365.jpg',
    first_name: 'Jaimie',
    last_name: 'Gasker',
    email: 'jgasker4@psu.edu',
  },
];

function AllMeetupsPage() {
  return (
    <div>
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={fake_data} />
    </div>
  );
}
export default AllMeetupsPage;

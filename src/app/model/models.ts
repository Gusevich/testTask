export interface Photo {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string
    }
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string
  }
}

export interface Post {
  userId: string,
  id:  number,
  title: string,
  body: string
}

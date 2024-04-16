/**
 * Returns the structure of an object that will be returned from the api
 * @see {@link https://github.com/Kendew-dev/assignment-template#data}
 */
export type ResponseData = {
  id:string;
  slug:string;
  title:string;
  offer?:{
    value: string;
    type: 'Miles' | 'Punten'
  }
  cardArt: {
    src: string;
    alt: string;
  };
  tags: Array<string>;
  price:number;
  mainBenefits: Array<{
    icon: {
      src:string;
      alt:string;
    };
    title:string;
    description:string;
  }>;
  description: {
    title:string;
    body: string;
  };
}
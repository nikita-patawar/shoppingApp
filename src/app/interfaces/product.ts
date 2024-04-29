export interface Iproduct {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
    rating: IRating;
}
interface IRating {
    rate: number;
    count: number;
  }
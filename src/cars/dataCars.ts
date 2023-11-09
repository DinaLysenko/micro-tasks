export const topCars = [
    {id: 1, manufacturer:'BMW', model:'m5cs'},
    {id: 2, manufacturer:'Mercedes', model:'e63s'},
    {id: 3, manufacturer:'Audi', model:'rs6'}
]

export type TopCarsType = {
    topCars: Cars[]
}
type Cars ={
    id: number
    manufacturer: string
    model: string
}
export default interface BaseRepository {
    create(data: any): any
    getOne(id:number):any
    findAll(): any[]
    update(id:number,data:any):any
    delete(id:number):any
  }
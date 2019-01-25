export default interface BaseService {
    create(data: any): any
    findOne(id:number):any
    findAll(): any[]
    update(id:number,data:any):any
    delete(id:number):any
  }
import { ESex } from './../types/types';
import {IsEmpty, Length, Max, Min} from "class-validator"

export class People{

   @Length(2,20)
   private readonly name:string;

   @Min(0,{message:"年龄不能小于0"})
   @Max(200,{message:"年龄不能大于200"})
   private readonly age:number;

   private readonly sex:ESex;

   constructor(name:string,age:number,sex:ESex){
       this.name = name;
       this.age = age;
       this.sex = sex;
   }

   public printf(){
       return `我是${this.name},我是${this.sex}性,我今年${this.age}岁`
   }


}
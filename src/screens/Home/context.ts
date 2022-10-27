import { createContext } from "react";

export default createContext({
  changeAssignStatus(index:number):void {},
  deleteAssign(index:number): void {}
})
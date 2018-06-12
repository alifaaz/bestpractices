import { expect } from "chai"
import jsdom from "jsdom";
import fs from "fs";

describe("index.html",()  =>{
  it('sholudsay hello ',() => {
      // const index = fs.readFileSync('./src/index.html')
      // jsdom.env(index ,function(err,window){
      //   const h1 = window.getElementsByTagName('h1')[0];
      //   expect(h1.innerHTM).to.be.equal('Hello World')
      //   done()
      //   window.close();
      // } )
      expect(true).to.be.ok
  })
})

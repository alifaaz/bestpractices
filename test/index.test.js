import { expect } from "chai"
import jsdom from "jsdom";
import fs from "fs";

describe("index.html",()  =>{
  it('sholudsay hello ',(donee) => {
      const index = fs.readFileSync('./src/index.html')
      jsdom.JSDOM(index ,function(err,window){
        const h1 = window.getElementsByTagName('h1')[0];
        expect(h1.innerHTM).to.be.equal('Hello World')
        done()
        window.close();
      } )
  })
})

import { indent } from "./indent";

describe("indent", () => {
  it("indents `input`", () => {
    expect(
      indent(`
{
a: {
b: 1,
c: 1
},
d: 4
}    
`)
    ).toMatchInlineSnapshot(`
      "
      {
      	a: {
      		b: 1,
      		c: 1
      	},
      	d: 4
      }    
      "
    `);
  });
});

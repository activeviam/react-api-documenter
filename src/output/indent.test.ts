import { indent } from "./indent";

describe("indent", () => {
  it("indents `input`, escaping line returns, tabs and whitespaces", () => {
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
      {<br />&nbsp;&nbsp;<br />&nbsp;&nbsp;a: {<br />&nbsp;&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;b: 1,<br />&nbsp;&nbsp;&nbsp;&nbsp;c: 1<br />&nbsp;&nbsp;<br />},<br />d: 4<br /><br />}
      "
    `);
  });
});

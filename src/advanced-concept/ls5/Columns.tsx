export default function Columns(): JSX.Element {
  const outline = {
    outline: 'dotted orange 2px',
  };
  return (
    <>
      <td style={outline}>Hello</td>
      <td style={outline}>World</td>
    </>
  );
}

// <React.Fragment>
//   <td>Hello</td>
//   <td>World</td>
// </React.Fragment>

// =================
// Shorthand
// =================
// <>
//   <td>Hello</td>
//   <td>World</td>
// </>

/*
eslint react/jsx-fragments: "off"
*/

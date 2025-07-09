function ChildComp({ words }) {
  return (
    <table border="1" cellPadding="5" style={{ margin: '10px 0' }}>
      <thead>
        <tr>
          <th>Zodis</th>
          <th>Simboliu kiekis</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word, index) => (
          <tr key={index}>
            <td>{word}</td>
            <td>{word.length}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ChildComp;
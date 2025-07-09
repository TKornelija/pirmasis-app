import ChildComp from "./ChildComp";

function ParentComp() {
  const masyvas1 = ['obuolys', 'kriause', 'bananas', 'braske'];
  const masyvas2 = ['automobilis', 'dviratis', 'motociklas'];

  return (
    <div style={{ padding: '12px' }}>
      <h2>Pirmas masyvas</h2>
      <ChildComp words={masyvas1} />

      <h2>Antras masyvas</h2>
      <ChildComp words={masyvas2} />
    </div>
  );
}

export default ParentComp;
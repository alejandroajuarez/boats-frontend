export function BoatsIndex({ boats }) {
  return (
    <div>
      <h1>All Boats</h1>
      {boats.map((boat) => (
        <div key={boat.id}>
          <h2>Name: {boat.name}</h2>
          <h4>Make: {boat.maker} Model: {boat.model}</h4>
          <p>Year: {boat.year}</p>
          <p>Price: {boat.pricing}</p>
          <p>Specs: {boat.specs}</p>
        </div>
      ))}
    </div>
  )
}
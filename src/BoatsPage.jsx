import axios from "axios";
import { useEffect, useState } from "react";
import { BoatsIndex } from "./BoatsIndex";

  export function BoatsPage() {
    const [boats, setBoats] = useState([]);

    const handleIndex = () => {
      console.log("handleIndex");
      axios.get("/boats.json").then((response) => {
        console.log(response.data);
        setBoats(response.data);
      });
    };

    useEffect(handleIndex, []);

    return (
      <main>
       <h1>Welcome to React!</h1>
       <BoatsIndex boats={boats} />
      </main>
    );
  }
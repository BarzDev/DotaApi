import { useEffect, useState } from "react";
import DotaList from "./component/dota/Dota";

const { default: api } = require("./api/dotaApi");

const Dota = () => {
  const [hero, setHero] = useState([]);

  const fetchHero = async () => {
    const response = await api.get();
    const data = await response.data;
    setHero(data);
  };

  useEffect(() => {
    fetchHero();
  }, []);

  return <DotaList heroes={hero} />;
};

export default Dota;

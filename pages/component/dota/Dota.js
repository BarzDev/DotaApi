import React, { useState } from "react";
import styles from "./index.module.css";
import Modal from "./Modal"; // Assuming you have the Modal.js file in the same directory

const DotaList = ({ heroes }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);

  const sortedHeroes = heroes.sort((a, b) => a.localized_name.localeCompare(b.localized_name));

  const handleOpenModal = (hero) => {
    setSelectedHero(hero);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles["dota-list-container"]}>
      <h1>HERO LIST</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Hero</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Primary Attribute</th>
              <th className="px-4 py-2">Attack Type</th>
              <th className="px-4 py-2">Roles</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {sortedHeroes.map((hero, i) => (
              <tr key={i}>
                <td className="border px-4 py-2">
                  <img src={`https://cdn.cloudflare.steamstatic.com${hero.icon}`} alt="Hero Icon" />
                </td>
                <td className="border px-4 py-2">{hero.localized_name}</td>
                <td className="border px-4 py-2">
                  {hero.primary_attr === "agi" ? (
                    <img className={styles["img-icon"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" />
                  ) : hero.primary_attr === "str" ? (
                    <img className={styles["img-icon"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" alt="Str Icon" />
                  ) : hero.primary_attr === "int" ? (
                    <img className={styles["img-icon"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="Int Icon" />
                  ) : hero.primary_attr === "all" ? (
                    <img className={styles["img-icon"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png" alt="All Icon" />
                  ) : (
                    ""
                  )}
                </td>
                <td className="border px-4 py-2">
                  {hero.attack_type === "Melee" ? (
                    <img className={styles["img-atk"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg" alt="Melee Icon" />
                  ) : hero.attack_type === "Ranged" ? (
                    <img className={styles["img-atk"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg" alt="Ranged Icon" />
                  ) : (
                    ""
                  )}
                </td>
                <td className="border px-4 py-2">
                  {hero.roles.map((role, index) => (
                    <span key={index} className="badge badge-ghost badge-sm">
                      {role}
                    </span>
                  ))}
                </td>
                <td className="border px-4 py-2">
                  <button className=" badge badge-primary badge-outline-xs" onClick={() => handleOpenModal(hero)}>
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={modalOpen} onClose={handleCloseModal} hero={selectedHero} />
    </div>
  );
};

export default DotaList;

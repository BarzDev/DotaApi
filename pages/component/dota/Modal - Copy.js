import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, hero }) => {
  if (!isOpen) return null;

  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-content-info"]}>
          <div className={styles["modal-content_info-1"]}>
            <h2>{hero.localized_name}</h2>
            <img className={styles["img-hero"]} src={`https://cdn.cloudflare.steamstatic.com${hero.img}`} alt="Hero img" />
            <div className={styles["modal-stats"]}>
              <div className={styles["modal-ico"]}>
                <p>
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
                </p>
                <p>
                  {hero.attack_type === "Melee" ? (
                    <img className={styles["img-atk"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg" alt="Melee Icon" />
                  ) : hero.attack_type === "Ranged" ? (
                    <img className={styles["img-atk"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg" alt="Ranged Icon" />
                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className={styles["modal-roles"]}>
                {hero.roles.map((role, index) => (
                  <span key={index} className="badge badge-ghost badge-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles["modal-content-info-2"]}>
            <table>
              <tbody>
                <tr>
                  Base health : <td> {hero.base_health}</td>
                </tr>
                <tr>
                  Base mana : <td> {hero.base_mana}</td>
                </tr>
                <tr>
                  Atk Range : <td> {hero.base_health}</td>
                </tr>
                <tr>
                  Base health : <td> {hero.attack_range}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn btn-error" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

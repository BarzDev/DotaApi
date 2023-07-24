import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, hero }) => {
  if (!isOpen) return null;

  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content"]}>
        <div className={styles["modal-content-info"]}>
          <div className={styles["modal-content_head"]}>
            <div>
              <h2>{hero.localized_name}</h2>
            </div>
            <div>
              <button className="btn btn-error" onClick={onClose}>
                X
              </button>
            </div>
          </div>
          <div className={styles["modal-content_section"]}>
            <div className={styles["modal-content_section1"]}>
              <div>
                <img className={styles["img-hero"]} src={`https://cdn.cloudflare.steamstatic.com${hero.img}`} alt="Hero img" />
              </div>
              <div className={styles["hero_stats"]}>
                <div className={styles["hero_health"]}>
                  <div>
                    <p>
                      {hero.base_health + hero.base_str * 22}+ {hero.base_health_regen + hero.base_str / 10}/s
                    </p>
                  </div>
                </div>
                <div className={styles["hero_mana"]}>
                  <div>
                    <p>
                      {hero.base_mana + hero.base_int * 12} + {hero.base_mana_regen + hero.base_int / 20}/s
                    </p>
                  </div>
                </div>

                <div className={styles["modal_atr"]}>
                  <div className={styles["modal-ico"]}>
                    <div>
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
                    </div>
                    <div>
                      {hero.attack_type === "Melee" ? (
                        <img className={styles["img-atk"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg" alt="Melee Icon" />
                      ) : hero.attack_type === "Ranged" ? (
                        <img className={styles["img-atk"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg" alt="Ranged Icon" />
                      ) : (
                        ""
                      )}
                    </div>
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
            </div>
            <div className={styles["modal-content_section2"]}>
              <div className={styles["table-style"]}>
                <table width="100%">
                  <caption>Stats</caption>
                  <tr>
                    <td>Base Health</td>
                    <td>:</td>
                    <td>{hero.base_health + hero.base_str * 22}</td>
                  </tr>

                  <tr>
                    <td>Base Mana</td>
                    <td>:</td>
                    <td>{hero.base_mana + hero.base_int * 12}</td>
                  </tr>

                  <tr>
                    <td> Base Armor</td>
                    <td>:</td>
                    <td>{(hero.base_armor + hero.base_agi / 6).toFixed(1)}</td>
                  </tr>
                  <tr>
                    <td>
                      <img className={styles["img-icon_table"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png" alt="Str Icon" /> /level
                    </td>
                    <td>:</td>
                    <td> + {hero.str_gain}</td>
                  </tr>
                  <tr>
                    <td>
                      <img className={styles["img-icon_table"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png" alt="Agi Icon" /> /level
                    </td>
                    <td>:</td>
                    <td> + {hero.agi_gain}</td>
                  </tr>
                  <tr>
                    <td>
                      <img className={styles["img-icon_table"]} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png" alt="Int Icon" /> /level
                    </td>
                    <td>:</td>
                    <td> + {hero.int_gain}</td>
                  </tr>
                  <tr>
                    <td>Movement Speed</td>
                    <td>:</td>
                    <td>{hero.move_speed}</td>
                  </tr>
                  <tr>
                    <td>Attack Range</td>
                    <td>:</td>
                    <td>{hero.attack_range}</td>
                  </tr>
                  <tr>
                    <td>Attack Rate</td>
                    <td>:</td>
                    <td>{hero.attack_rate}/s</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

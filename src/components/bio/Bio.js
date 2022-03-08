import React from "react";
// import { useLocation } from 'react-router-dom';
import "./bio.css";

const Bio = () => {

  const url_affiche =
    "https://res.cloudinary.com/dnpddlkrq/image/upload/v1641565779/casino_pornichet_cf5tnr.jpg";

  return (
    <>
      <div className="header-portrait">
      <div className="title">
        <h1 className="bord_haut">MS NICKKI</h1>
        <h2>&</h2>
        <h2 className="bord_bas">THE MEMPHIS SOUL CONNECTION</h2>

      </div>
      </div>
      <div className="ui two column doubling stackable grid container">
        <div className="column text-one">
          <div className="ui segment text">
            MS Nickki est une "blueswoman" née a Holly Springs (Mississippi),
            berceau de la musique noire américaine dont elle est une
            représentante aujourd'hui. <br/>
            Elle vous envoie sur la planète "Blues"
            avec un talent vocal impressionnant et un charme naturel qui ne peut
            vous laisser insensible... MS Nickki chante un blues profond alliant
            la puissance du gospel (répertoire qu'elle connaît particulièrement)
            et la douceur de la soul: une alchimie musicale typique de Memphis,
            Tennessee, cette immense ville au riche passé musical dans laquelle
            elle réside depuis une dizaine d'années.<br/>
            Ses influences majeures
            sont des chanteuses telles Denise LaSalle, Aretha Franklin, Tina
            Turner, Barbara Carr et des chanteurs originaire de Memphis tels que
            Johnnie Taylor et Al Green.
          </div>
        </div>
        <div className="tof-one">
        <div
        className="ui container grid"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <a className="tof_cadre" href={url_affiche}>
          <img
            src={url_affiche}
            alt="affichemsnickki"
            style={{ width: "100%" }}
          />
        </a>
      </div>
      </div>
        <div className="column bio text-two">
          <div className="ui segment text">
            <div className="combo">
            MS Nickki: chant lead<br/>
            Florian Royo: guitare<br/>
            Pierre Cherbero: claviers choeurs<br/>
            Julien Dubois: basse<br/>
            Eric Boréave: batterie choeurs<br/>
            <br/>
            </div>
            Le quintett tourne régulièrement en Europe depuis une dizaine
            d'années et s'est produit sur des grandes scènes comme Cahors Blues
            Festival, Blues sur Seine, Beautiful Swamp Blues Festival, Cameros
            Blues Festival (Espagne). Dublin Blues Festival (Irelande), Blues
            Rules Festival (Suisse) et biens d'autres. Sur scène, c'est une onde
            de choc qui se propage ! Elle aime chanter et partager son amour
            pour le Blues et la Vie! Elle sait le montrer et "emmener" les gens,
            c'est l'école américaine du show...
          </div>
        </div>
      </div>
      <div className="tof-two">
      <div
        className="ui container grid"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <a className="tof_cadre" href={url_affiche}>
          <img
            src={url_affiche}
            alt="affichemsnickki"
            style={{ width: "100%" }}
          />
        </a>
      </div>
    </div>
    </>
  );
};

export default Bio;

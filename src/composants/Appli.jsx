import "./Appli.scss";
import Entete from "./Entete";
import ListeDossiers from "./ListeDossiers";
import * as React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function Appli() {
  return (
    <div className="Appli">
      <Entete />
      <section className="contenu-principal">
        <ListeDossiers />
        <Fab className="fab" size="large" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </section>
    </div>
  );
}
